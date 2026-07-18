
import { createStore } from "solid-js/store";

export type BookingData = {
  date?: string;
  starttime?: string;
  endtime?: string;
  adress?: string;
  guests?: string;
  product?: "sax" | "loop" | "custom";
  soundSystem?: boolean;
  message?: string;
  email?: string;
};

export const [booking, setBooking] = createStore<BookingData>({});