
import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

export default function Contact() {
    return (
        <main>
            <Title>Contact</Title>
            <Hero
                imageUrl="img/saxhero.webp"
                subtitle="Ich freue mich auf deine Nachricht!"
                headline="Contact me!"
            ></Hero>
        </main>     
    );
}
