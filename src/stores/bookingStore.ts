
import { createStore } from "solid-js/store";

export type BookingData = {
  date?: string;
  guests?: number;

  product?: "sax" | "loop" | "custom";
  duration?: number;

  soundSystem?: boolean;
};

export const [booking, setBooking] = createStore<BookingData>({});