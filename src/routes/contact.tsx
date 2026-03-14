
import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";
import "./contact.css";

export default function Contact() {
    return (
        <main>
            <Title>Contact</Title>
            <Hero
                imageUrl="img/saxhero.webp"
                subtitle="Ich freue mich auf deine Nachricht!"
                headline="Contact me!"
            ></Hero>

            <div class="justify-center">
                <form class="content-container contact-form w-full">
                    <h2 class="headline">Deine Nachricht</h2>
                    <div class="input-container">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="input-container">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="input-container">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button class="button-primary" type="submit">Nachricht senden</button>
                </form>
            </div>
        </main>     
    );
}
