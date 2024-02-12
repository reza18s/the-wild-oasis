import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success("booking successfully deleted");
      // navigate(-1);

      queryClient.invalidateQueries({
        queryKey: ["bookings"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isLoading, mutate };
}
