import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

export default function Booking() {
  return (
    <main>
      <Title>Buchung</Title>
       <Hero
              imageUrl="img/booking.jpg"
              subtitle="& Your Event"
              headline="Booking"
            ></Hero>
    </main>
  );
}
