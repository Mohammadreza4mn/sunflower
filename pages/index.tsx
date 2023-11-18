import Image from "next/image";
import { useDispatch, useSelector } from "@/redux/store";
import { signOut } from "@/redux/slices/auth/slice";
import { selectProduct } from "@/redux/slices/product/selectors";
import {
  addProductAsync,
  productListAsync,
} from "@/redux/slices/product/actionsThunk";
import Modal from "@/components/modal";
import { useState, FormEvent, useEffect } from "react";
import ProductCard from "@/components/productCard";
import Pagination from "@/components/pagination";
import AddProduct from "@/components/form/addProduct";
import Navbar from "@/components/navbar";
import { IForm } from "@/components/form/addProduct/type";

export default function Home() {
  const productList = useSelector(selectProduct);
  const dispatch = useDispatch();

  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const paginate = 8;
  const hasProduct = productList.totalRowCount;
  const countPage = hasProduct
    ? Math.ceil(productList.totalRowCount / paginate)
    : 1;

  useEffect(() => {
    dispatch(productListAsync({ count: paginate }));
  }, []);

  const handleChangePage = (currentPage: number) => {
    setPage(currentPage);
    dispatch(
      productListAsync({
        count: paginate,
        skip: paginate * (currentPage - 1),
      })
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSignOut = () => dispatch(signOut());

  const handleAddProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & IForm;
    const requestBody = {
      ProductTitle: target.ProductTitle.value,
      Description: target.Description.value,
      ...(target.ProductPrice.value && {
        ProductPrice: parseInt(target.ProductPrice.value),
      }),
      file: target.file.files[0],
    };

    dispatch(addProductAsync(requestBody)).then(() => setToggleModal(false));
  };

  return (
    <main className="mx-24 my-9 flex flex-col relative h-screen">
      <Navbar
        handleSignOut={handleSignOut}
        showModalAddProduct={() => setToggleModal(true)}
      />

      {hasProduct ? (
        <section dir="rtl" className="flex flex-wrap my-10 gap-8">
          {productList.list.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}
        </section>
      ) : (
        <section className="h-screen grid place-content-center">
          <Image src="/img/empty.jpg" alt="empty" width={300} height={300} />
        </section>
      )}

      <footer
        className={`w-full border-t pt-5 pb-16 mt-auto bg-white ${
          hasProduct ? "" : "opacity-50 pointer-events-none"
        }`}
      >
        <Pagination
          count={countPage}
          onPageChange={handleChangePage}
          page={page}
          separatorRange={6}
        />
      </footer>

      <Modal open={toggleModal} handleClose={() => setToggleModal(false)}>
        <div className="grid place-content-center">
          <AddProduct
            onSubmit={handleAddProduct}
            onCancel={() => setToggleModal(false)}
          />
        </div>
      </Modal>
    </main>
  );
}
