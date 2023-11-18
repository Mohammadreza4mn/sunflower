import { createAppAsyncThunk } from "@/redux/createAppAsyncThunk";
import { loginApi } from "@/api/userLogin";

export const signInAsync = createAppAsyncThunk("auth/login", loginApi);
