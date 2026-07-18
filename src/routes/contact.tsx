
import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";
import "./contact.css";
import { sendMail } from "~/mailservice/send-mail";

export default function Contact() {



    function handleSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        sendMail(name, email, message)()
            .then((success) => {
                if (success) {
                    alert("Nachricht erfolgreich gesendet!");
                    form.reset();
                } else {
                    alert("Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.");
            });
    }

    return (
        <main>
            <Title>Contact</Title>
            <Hero
                imageUrl="img/saxhero.webp"
                subtitle="Ich freue mich auf Deine Nachricht!"
                headline="KONTAKT"
            ></Hero>

            <div class="justify-center">
                <form class="content-container contact-form w-full" onSubmit={handleSubmit}>
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
                        <label for="message">Nachricht:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button class="button-primary" type="submit">Nachricht senden</button>
                </form>
            </div>
            <dialog class="dialog" id="success-dialog">
                <p>Nachricht erfolgreich gesendet!</p>
                <button onClick={() => (document.getElementById("success-dialog") as HTMLDialogElement).close()}>Schließen</button>
            </dialog>
            <dialog id="error-dialog">
                <p>Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.</p>
                <button onClick={() => (document.getElementById("error-dialog") as HTMLDialogElement).close()}>Schließen</button>
            </dialog>
        </main>
    );
}
