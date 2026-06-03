import { booking, setBooking } from "~/stores/bookingStore";

export const Step4 = {
    id: "step3",

    component: () => (
        <div class="wizard-step-container">

            <div class="input-container">
                <h4>Kontakt</h4>

                <p>Gebe deine Mail Adresse an, damit ich mich mit dir in Verbindung setzen kann.</p>
                <input
                    type="email"
                    placeholder="E-Mail Adresse"
                    value={booking.email || ""}
                    onInput={(e) => setBooking("email", e.currentTarget.value)}
                />


                <h4>Nachricht</h4>
                <p>Gebe hier noch eine Nachricht ein, vor allem bei individuellen Wünschen.</p>
                <textarea
                    placeholder="Nachricht"
                    value={booking.message || ""}
                    onInput={(e) => setBooking("message", e.currentTarget.value)}
                />

            </div>

        </div>
    ),

    validate: () => !!booking.email,
};