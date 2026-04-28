// steps/Step1.tsx
import { booking, setBooking } from "~/stores/bookingStore";

export const Step1 = {
  id: "step1",

  component: () => (
    <div>
      <h2>Wann ist dein Event?</h2>
      <input
        type="date"
        value={booking.date || ""}
        onInput={(e) => setBooking("date", e.currentTarget.value)}
      />

      <h2>Wie viele Personen?</h2>
      <input
        type="number"
        value={booking.guests || ""}
        onInput={(e) =>
          setBooking("guests", Number(e.currentTarget.value))
        }
      />
    </div>
  ),

  validate: () => {
    return !!booking.date && !!booking.guests;
  },
};