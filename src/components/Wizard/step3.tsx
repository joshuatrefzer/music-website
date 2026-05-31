import { booking, setBooking } from "~/stores/bookingStore";

export const Step3 = {
  id: "step3",

  component: () => (
    <div class="wizard-step-container">

      <div class="input-container">
        <h4>Tontechnik</h4>
        <p>Benötige ich meine eigene Tontechnik?</p>
        <div class="radio-group">
          <input
            type="radio"
            id="soundSystem-true"
            name="soundSystem"
            value="true"
            checked={booking.soundSystem === true}
            onChange={() => setBooking("soundSystem", true)}
          />
          <label for="soundSystem-true">Ja</label>

          <input
            type="radio"
            id="soundSystem-false"
            name="soundSystem"
            value="false"
            checked={booking.soundSystem === false}
            onChange={() => setBooking("soundSystem", false)}
          />
          <label for="soundSystem-false">Nein</label>
        </div>
        <h4>Welches Projekt?</h4>
        <p>Wähle hier aus meinen Projekten aus.<br />
          Es ist auch möglich, die Projekte zu kombinieren.
        </p>
        <select
          value={booking.product}
          onChange={(e) => setBooking("product", e.currentTarget.value as "sax" | "loop" | "custom")}
        >
          <option value="sax">Saxophon & Elektro</option>
          <option value="loop">Loop Station</option>
          <option value="custom">Individuell</option>
        </select>

      </div>





    </div>
  ),

  validate: () => true,
};