import type { ReduxState } from "@/redux/store";

export const selectAuth = (state: ReduxState) => state.auth;
