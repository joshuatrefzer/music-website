// steps/Step1.tsx
import { booking, setBooking } from "~/stores/bookingStore";

export const Step1 = {
  id: "step1",

  component: () => (
    <div class="wizard-step-container">
      <div class="input-container">
        <h4>Wann ist dein Event?</h4>
        <p>Gib hier den Tag des Events an</p>
        <input
          class="date-input"
          type="date"
          value={booking.date || ""}
          onInput={(e) => setBooking("date", e.currentTarget.value)}
        />

        <p>Gib hier an, wann meine Spielzeit beginnen und enden soll</p>
        <div class="time-inputs">
          Von
          <input
            class="date-input"
            type="time"
            value={booking.starttime || ""}
            onInput={(e) => setBooking("starttime", e.currentTarget.value)}
          />
          bis
          <input
            class="date-input"
            type="time"
            value={booking.endtime || ""}
            onInput={(e) => setBooking("endtime", e.currentTarget.value)}
          />

        </div>

      </div>


    </div>
  ),

  validate: () => {
    return !!booking.starttime && !!booking.endtime;
  },
};