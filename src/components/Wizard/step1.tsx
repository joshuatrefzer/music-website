// steps/Step1.tsx
import { booking, setBooking } from "~/stores/bookingStore";

const HOUR_OPTIONS = Array.from({ length: 14 }, (_, i) => i + 10).flatMap((hour) => [
  {
    value: `${hour.toString().padStart(2, "0")}:00`,
    label: `${hour.toString().padStart(2, "0")}:00 Uhr`,
  },
  {
    value: `${hour.toString().padStart(2, "0")}:30`,
    label: `${hour.toString().padStart(2, "0")}:30 Uhr`,
  },
]);

const HourSelect = (props: {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) => (
  <select
    class="date-input"
    value={props.value}
    onChange={(e) => props.onChange(e.currentTarget.value)}
  >
    <option value="">{props.placeholder || "Uhrzeit wählen"}</option>

    {HOUR_OPTIONS.map(({ value, label }) => (
      <option value={value}>
        {label}
      </option>
    ))}
  </select>
);

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

        <p>Gib hier die gewünschte Spielzeit an</p>

        <div class="time-inputs">
          <HourSelect
            placeholder="Startzeit"
            value={booking.starttime || ""}
            onChange={(value) => setBooking("starttime", value)}
          />
          <HourSelect
            placeholder="Endzeit"
            value={booking.endtime || ""}
            onChange={(value) => setBooking("endtime", value)}
          />
        </div>
      </div>
    </div>
  ),

  validate: () => {
    return !!booking.starttime && !!booking.endtime;
  },
};