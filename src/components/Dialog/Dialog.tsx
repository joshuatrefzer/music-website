import { createSignal, Show, type JSX } from "solid-js";
import "./Dialog.css";

export type DialogOptions = {
    title?: string;
    content?: string | JSX.Element;
};

const [dialog, setDialog] = createSignal<DialogOptions | null>(null);

export function openDialog(options: DialogOptions) {
    document.body.style.overflow = "hidden";
    setDialog(options);
}

export function closeDialog() {
    document.body.style.overflow = "";
    setDialog(null);
}

export default function Dialog() {
    console.log("Dialog component rendered");

    return (<Show when={dialog()}>
        {(data) => (<div class="dialog-overlay" onClick={closeDialog}>
            <div
                class="dialog"
                onClick={(e) => e.stopPropagation()}
            > <button
                class="dialog-close"
                onClick={closeDialog}
                aria-label="Schließen"
            >
                    × </button>

                <Show when={data().title}>
                    <h2>{data().title}</h2>
                </Show>

                <div class="dialog-content">
                    {data().content}
                </div>
            </div>
        </div>
        )}
    </Show>

    );
}
