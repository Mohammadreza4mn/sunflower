import { axiosInstance } from "@/utils/axios";
import { Endpoint } from "@/api/product/endpoint";
import { IAddProduct, IProductList } from "@/api/product/type";

const productListApi = async (params: Partial<IProductList>) => {
  const response = await axiosInstance.get(Endpoint.productList, {
    params: { ...params },
  });

  return response.data;
};

const addProductApi = async (data: Partial<IAddProduct>) => {
  const response = await axiosInstance.post(Endpoint.addProduct, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export { productListApi, addProductApi };
