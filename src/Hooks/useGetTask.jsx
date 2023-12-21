import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useGetTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: task = [], refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allTasks?email=${user?.email}`);
      return res?.data;
    },
  });
  return [task, refetch];
};

export default useGetTask;
