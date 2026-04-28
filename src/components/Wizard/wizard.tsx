// components/Wizard/Wizard.tsx
import { createSignal } from "solid-js";
import type { WizardStep } from "./types";

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
        <div>
            <Progress steps={props.steps.length} current={stepIndex()} />

            <div class="mt-8">
                {currentStep().component()}
            </div>

            <div class="flex gap-4 mt-6">
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
        <div class="flex gap-4">
            {Array.from({ length: props.steps }).map((_, i) => (
                <div
                    class={`w-8 h-8 flex items-center justify-center rounded-full 
          ${i === props.current ? "bg-black text-white" : "bg-gray-300"}
          transition-all duration-300`}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
}