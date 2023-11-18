import { createSlice } from "@reduxjs/toolkit";
import { signInAsync } from "@/redux/slices/auth/actionsThunk";
import { setCookie } from "@/utils/cookie";
import { config } from "@/utils/environment";
import router from "next/router";
import { IInitialState } from "@/redux/slices/auth/type";
import { removeCookie } from "@/utils/cookie";
import { PageEnum } from "@/utils/pages.types";

const initialState: IInitialState = {
  successful: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.successful = false;
      removeCookie(config.authenticationCookieName as string);
      router.replace(PageEnum.signIn);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.successful = false;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.successful = true;
        setCookie(
          config.authenticationCookieName as string,
          JSON.stringify(action.payload.data),
          action.payload.data.accessToken.expire_refresh_token
        );
        router.replace("/");
      });
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
