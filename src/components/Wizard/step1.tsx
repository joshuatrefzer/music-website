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
                    required
                    value={booking.date || ""}
                    onInput={(e) =>
                        setBooking("date", e.currentTarget.value)
                    }
                />

                <p>Gib hier die gewünschte Spielzeit an</p>

                <div class="time-inputs">
                    <input
                        class="time-input"
                        type="time"
                        required
                        value={booking.starttime || ""}
                        onInput={(e) =>
                            setBooking("starttime", e.currentTarget.value)
                        }
                    />

                    <span>bis</span>

                    <input
                        class="time-input"
                        type="time"
                        required
                        value={booking.endtime || ""}
                        onInput={(e) =>
                            setBooking("endtime", e.currentTarget.value)
                        }
                    />
                </div>
            </div>
        </div>
    ),
};
