import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = new QueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    queryKey: ["bookings"],
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out`);
      // invalidate the query which is active
      queryClient.invalidateQueries({ queryKey: ["booking", data.id] });
    },
    onError: () => {
      toast.error("Error while checking out guest");
    },
  });
  return { checkout, isCheckingOut };
}
