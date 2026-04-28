
import { JSX } from "solid-js";

export type WizardStep = {
  id: string;
  component: () => JSX.Element;
  validate: () => boolean;
};