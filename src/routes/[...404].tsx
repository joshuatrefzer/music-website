import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>404</h1>
      <h2>Die Seite existiert nicht</h2>
        
        <a class="link" href="/">
          Zurück zur Startseite
        </a>
    </main>
  );
}
