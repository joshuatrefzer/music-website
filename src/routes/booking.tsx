import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";
import { Step1 } from "~/components/Wizard/step1";
import { Step2 } from "~/components/Wizard/step2";
import { Step3 } from "~/components/Wizard/step3";
import Wizard from "~/components/Wizard/wizard";

import "./booking.css";

export default function Booking() {
  return (
    <main>
      <Title>Buchung</Title>
      <Hero
        imageUrl="img/booking.jpg"
        subtitle="& Your Event"
        headline="Booking"
      ></Hero>

      <Wizard steps={[Step1, Step2, Step3]} />
    </main>
  );
}
