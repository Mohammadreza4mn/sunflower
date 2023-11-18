import { Endpoint } from "@/api/userLogin/endpoint";
import { axiosInstance } from "@/utils/axios";
import { ILogin, IRefreshToken } from "@/api/userLogin/type";

const loginApi = async (data: ILogin) => {
  const response = await axiosInstance.post(Endpoint.login, data);

  return response.data;
};

const refreshTokenApi = async (data: IRefreshToken) => {
  const response = await axiosInstance.post(Endpoint.refreshToken, data);

  return response.data;
};

export { loginApi, refreshTokenApi };
