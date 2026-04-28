import { booking, setBooking } from "~/stores/bookingStore";

export const Step3 = {
  id: "step3",

  component: () => (
    <div>
      <h2>Tontechnik vorhanden?</h2>

      <input
        type="checkbox"
        checked={booking.soundSystem || false}
        onChange={(e) =>
          setBooking("soundSystem", e.currentTarget.checked)
        }
      />
    </div>
  ),

  validate: () => true,
};