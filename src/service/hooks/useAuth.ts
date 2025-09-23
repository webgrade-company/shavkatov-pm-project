import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { checkAuth, loginFetch } from "../api"
import { AuthLogin } from "@/interface"




export const useCheckAuth = () => {

  return useQuery({
    queryKey: ["checkauth"],
    queryFn: checkAuth,
    retry: false,         
    refetchOnWindowFocus: false,
  })
}

export const useLogin = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AuthLogin) => loginFetch(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["login"]})
    }
  })
}