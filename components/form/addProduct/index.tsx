import Button from "@/components/button";
import styles from "@/components/form/addProduct/styles";
import { IProps } from "@/components/form/addProduct/type";
import Input from "@/components/input";

export default function AddProduct(props: IProps) {
  const style = styles();

  return (
    <form dir="rtl" className={style.main} onSubmit={props.onSubmit}>
      <h3>افزودن محصول</h3>
      <Input label="نام محصول" name="ProductTitle">
        <Input.Text placeholder="نام محصول..." />
      </Input>
      <Input label="قیمت محصول" name="ProductPrice">
        <Input.Text placeholder="قیمت محصول..." />
      </Input>
      <Input label="توضیحات" name="Description">
        <Input.Textarea placeholder="..." />
      </Input>
      <Input label="بارگذاری عکس محصول" name="file">
        <Input.File />
      </Input>
      <div className={style.containerButton}>
        <Button
          color="transparent"
          width="large"
          type="button"
          onClick={props.onCancel}
        >
          انصراف
        </Button>
        <Button
          color="green"
          width="large"
          type="submit"
          className="text-white"
        >
          ثبت محصول
        </Button>
      </div>
    </form>
  );
}
