import { useQuery, } from "@tanstack/react-query";
import { useMutation } from '@tanstack/react-query';
import { sendApi } from "./axios";




export const useCreate = () => {
    return useMutation({
      mutationFn: (data) => sendApi.create(data), 
    });
  };

  export const useData = () => {
    return useQuery({
      queryKey: ['Slider'],
      queryFn: () => sendApi.get().then((res) => res.data),
      keepPreviousData: true,
      retry: false,
      suspense: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
  
  
    });
  };

  export const useDelete = () => {
    return useMutation({
      mutationFn: (id) => sendApi.delete(id), 
    });
  };

  export const useUpdate = () => {
  return useMutation({
    mutationFn: ({ id, data }) => sendApi.update(id, data),
  });
};