import { booking, setBooking } from "~/stores/bookingStore";

export const Step2 = {
    id: "step2",

    component: () => (
        <div class="wizard-step-container">
            <div class="input-container">
                <h4>Wo ist dein Event?</h4>

                <p>Gib hier die Adresse der Location an</p>

                <textarea
                    placeholder="Adresse"
                    required
                    value={booking.adress || ""}
                    onInput={(e) =>
                        setBooking("adress", e.currentTarget.value)
                    }
                />

                <p>Wie viele Gäste werden teilnehmen?</p>

                <input
                    type="number"
                    min="1"
                    placeholder="Grobe Anzahl der Gäste"
                    required
                    value={booking.guests || ""}
                    onInput={(e) =>
                        setBooking("guests", e.currentTarget.value)
                    }
                />
            </div>
        </div>
    ),
};
