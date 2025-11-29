import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

export default function Offer() {
  return (
    <main>
      <Title>Angebot</Title>
      <Hero
        imageUrl="img/hero1.webp"
        subtitle="Musik für ihre Veranstaltung?"
        headline="Mein Portfolio"
      ></Hero>
      
    </main>
  );
}
