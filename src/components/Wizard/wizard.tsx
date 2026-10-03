import { createSignal } from "solid-js";
import type { WizardStep } from "./types";
import "./wizard.css";
import { sendMail } from "~/mailservice/send-mail";
import { booking, setBooking } from "~/stores/bookingStore";
import { openDialog } from "../Dialog/Dialog";

export default function Wizard(props: { steps: WizardStep[] }) {
    const [stepIndex, setStepIndex] = createSignal(0);

    const currentStep = () => props.steps[stepIndex()];

    const next = () => {
        if (stepIndex() < props.steps.length - 1) {
            setStepIndex(stepIndex() + 1);
        }
    };

    const back = () => {
        if (stepIndex() > 0) {
            setStepIndex(stepIndex() - 1);
        }
    };

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();

        if (stepIndex() < props.steps.length - 1) {
            next();
            return;
        }

        const aggregatedInfos =
            booking.date +
            " " +
            booking.starttime +
            " - " +
            booking.endtime +
            "\n" +
            booking.adress +
            "\n" +
            booking.guests +
            " Gäste\n" +
            booking.product +
            "\n" +
            (booking.soundSystem
                ? "Sound System: Ja\n"
                : "Sound System: Nein\n") +
            booking.message;

        const success = await sendMail(
            "Buchungs Wizard Anfrage",
            booking.email ?? "Keine E-Mail angegeben",
            aggregatedInfos
        )();

        if (success) {
            openDialog({
                title: "Vielen Dank!",
                content: "Nachricht wurde erfolgreich gesendet!",
            });

            setStepIndex(0);
            setBooking({});
            
        } else {
            openDialog({
                title: "Fehler",
                content:
                    "Fehler beim Senden der Nachricht. Bitte schreiben Sie eine E-Mail an music@joshuatrefzer.de",
            });
        }
    }

    return (
        <div class="wizard-container">
            <Progress
                steps={props.steps.length}
                current={stepIndex()}
            />

            <form
                class="wizard-form"
                onSubmit={handleSubmit}
            >
                <div class="mt-8">
                    {currentStep().component()}
                </div>

                <div class="wizard-navigation">
                    <button
                        type="button"
                        class="button-primary"
                        onClick={back}
                        disabled={stepIndex() === 0}
                    >
                        Zurück
                    </button>

                    <button
                        type="submit"
                        class="button-primary"
                    >
                        {stepIndex() === props.steps.length - 1
                            ? "Absenden"
                            : "Weiter"}
                    </button>
                </div>
            </form>
        </div>
    );
}

function Progress(props: { steps: number; current: number }) {
    return (
        <div class="wizard-progress">
            {Array.from({ length: props.steps }).map((_, i) => {
                const isCompleted = i < props.current;
                const isReached = i <= props.current;

                return (
                    <>
                        <div
                            class="wizard-step-indicator"
                            classList={{
                                "wizard-step-indicator-active": isReached,
                            }}
                        >
                            {isCompleted ? "✓" : i + 1}
                        </div>

                        {i < props.steps - 1 && (
                            <div
                                class="wizard-step-line"
                                classList={{
                                    "wizard-step-line-active": isCompleted,
                                }}
                            />
                        )}
                    </>
                );
            })}
        </div>
    );
}
