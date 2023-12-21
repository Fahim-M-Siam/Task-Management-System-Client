import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useGetTask = (status) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: task = [], refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/tasks?email=${user?.email}&status=${status}`
      );
      return res?.data;
    },
  });
  return [task, refetch];
};

export default useGetTask;
