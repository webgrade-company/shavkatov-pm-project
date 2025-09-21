import { Bot } from "@/interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBot } from "../api";




export const useBot = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (botMessage: Bot) => postBot(botMessage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["botMessages"] });
    },
    onError: (error) => {
      console.error("Bot message yuborishda xatolik:", error);
    },
  });
}