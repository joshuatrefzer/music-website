import { booking, setBooking } from "~/stores/bookingStore";

export const Step2 = {
  id: "step2",

  component: () => (
    <div>
      <h2>Produkt</h2>

      <select
        value={booking.product}
        onChange={(e) => setBooking("product", e.currentTarget.value as "sax" | "loop" | "custom")}
      >
        <option value="sax">Saxophon + Elektro</option>
        <option value="loop">Loop Station</option>
        <option value="custom">Individuell</option>
      </select>

      <h2>Dauer</h2>
      <input
        type="number"
        onInput={(e) =>
          setBooking("duration", Number(e.currentTarget.value))
        }
      />
    </div>
  ),

  validate: () => !!booking.product,
};