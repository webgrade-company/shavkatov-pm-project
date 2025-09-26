import { AuthLogin } from "@/interface";
import customAxios from "./customAxios";

export const checkAuth = async () => {
  try {
    const res = await customAxios.get("auth/token");
    return res.data;
  } catch (error: any) {
    throw error
  }
};

export const loginFetch = async (payload: AuthLogin) => {
  try {
    const res = await customAxios.post("auth/login", payload);
    return res.data;
  } catch (error: any) {
    throw error; 
  }
};
