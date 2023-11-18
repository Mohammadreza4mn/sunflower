import { createAppAsyncThunk } from "@/redux/createAppAsyncThunk";
import { productListApi, addProductApi } from "@/api/product";

export const productListAsync = createAppAsyncThunk(
  "product/list",
  productListApi
);

export const addProductAsync = createAppAsyncThunk(
  "product/add",
  addProductApi
);
