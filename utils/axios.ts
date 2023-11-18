import axios, { AxiosRequestConfig } from "axios";
import { getCookie, removeCookie, setCookie } from "@/utils/cookie";
import { config } from "@/utils/environment";
import router from "next/router";
import { Endpoint } from "@/api/userLogin/endpoint";
import { PageEnum } from "@/utils/pages.types";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosRequestConfig);

const checkCookie = () => {
  const cookie = getCookie(config.authenticationCookieName as string);

  return cookie
    ? { hasCookie: true, cookieParse: JSON.parse(cookie) }
    : { hasCookie: false, cookieParse: undefined };
};

axiosInstance.interceptors.request.use(
  async (requestConfig) => {
    const { cookieParse, hasCookie } = checkCookie();

    if (hasCookie) {
      const {
        userName,
        accessToken: {
          access_token,
          expire_access_token,
          token_type,
          refresh_token,
          expire_refresh_token,
        },
      } = cookieParse;

      if (new Date() < new Date(expire_access_token)) {
        requestConfig.headers.Authorization = `${token_type} ${access_token}`;
      } else if (new Date() < new Date(expire_refresh_token)) {
        const response = await axios.post(
          `${config.baseUrl}/${Endpoint.refreshToken}`,
          {
            refreshToken: refresh_token,
            userName,
          }
        );

        const data = response.data.data;
        setCookie(
          config.authenticationCookieName as string,
          JSON.stringify(data),
          data.accessToken.expire_refresh_token
        );
        requestConfig.headers.Authorization = `${token_type} ${data.accessToken.access_token}`;
      }
    } else {
      router.replace(PageEnum.signIn);
    }

    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error?.response?.status) {
      case 401:
        removeCookie(config.authenticationCookieName as string);
        router.replace(PageEnum.signIn);
        break;

      case 400:
        alert(error.response?.data?.error);
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
