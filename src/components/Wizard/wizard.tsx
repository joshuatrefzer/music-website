// components/Wizard/Wizard.tsx
import { createSignal } from "solid-js";
import type { WizardStep } from "./types";
import "./wizard.css";

export default function Wizard(props: { steps: WizardStep[] }) {
    const [stepIndex, setStepIndex] = createSignal(0);

    const currentStep = () => props.steps[stepIndex()];

    const next = () => {
        if (!currentStep().validate()) return;

        if (stepIndex() < props.steps.length - 1) {
            setStepIndex(stepIndex() + 1);
        }
    };

    const back = () => {
        if (stepIndex() > 0) {
            setStepIndex(stepIndex() - 1);
        }
    };

    return (
        <div class="wizard-container">
            <Progress steps={props.steps.length} current={stepIndex()} />

            <div class="mt-8">
                {currentStep().component()}
            </div>

            <div class="wizard-navigation">
                <button onClick={back} disabled={stepIndex() === 0}>
                    Zurück
                </button>

                <button onClick={next}>
                    {stepIndex() === props.steps.length - 1
                        ? "Absenden"
                        : "Weiter"}
                </button>
            </div>
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