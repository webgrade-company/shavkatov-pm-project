import { AxiosError } from "axios";
import customAxios from "./customAxios";
import { ICreateCategory, IUpdateCategory } from "@/interface";

export const getAllCategoryApi = async () => {
  try {
    const res = await customAxios.get("/category/all");
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(
      err.response?.data?.message || "Categorylarni olishda xatolik"
    );
  }
};

export const createCategoryApi = async (payload: ICreateCategory) => {
  try {
    const res = await customAxios.post("/category/create", payload);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(
      err.response?.data?.message || "Category yaratishda xatolik"
    );
  }
};

export const getByIdCategoryApi = async (id: string) => {
  try {
    const res = await customAxios.get(`/category/${id}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(
      err.response?.data?.message || "Category olishda xatolik"
    );
  }
};

export const updateCategoryApi = async (id: string, payload: IUpdateCategory) => {
  try {
    const res = await customAxios.patch(`/category/${id}`, payload);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(err.response?.data?.message || "Category update qilishda xatolik");
  }
};

export const deleteCategoryApi = async (id: string) => {
  try {
    const res = await customAxios.delete(`/category/${id}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    throw new Error(err.response?.data?.message || "Category o'chirishda xatolik");
  }
};
