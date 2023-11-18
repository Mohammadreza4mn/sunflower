import type { ReduxState } from "@/redux/store";

export const selectProduct = (state: ReduxState) => state.product;
