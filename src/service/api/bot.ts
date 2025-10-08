import { Bot } from "@/interface/bot";
import customAxios from "./customAxios"


export const postBot = async (payload: Bot) => {
  try {
    const res = await customAxios.post("/bot", payload);
    return res.data;
  } catch (error) {
    console.log(error, "botga malumot yuborishda xatolik /api")
  }
}