import { createSlice } from "@reduxjs/toolkit";
import {
  productListAsync,
  addProductAsync,
} from "@/redux/slices/product/actionsThunk";
import { IInitialState } from "@/redux/slices/product/type";

const initialState: IInitialState = {
  list: [],
  totalRowCount: NaN,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productListAsync.fulfilled, (state, action) => {
        state.list = action.payload.data.list;
        state.totalRowCount = action.payload.data.totalRowCount;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.list.push(action.payload.data);
        state.totalRowCount += 1;
      });
  },
});

export default productSlice.reducer;
