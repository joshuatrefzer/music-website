import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

import "./about.css";
import OnePagerNav, { OnePagerNavProp } from "~/components/OnePagerNav/OnePagerNav";

export default function About() {

  const onepagerNavLinks: OnePagerNavProp[] = [
    { id: "jugend", label: "Jugend" },
    { id: "studium", label: "Studium" },
    { id: "heute", label: "Heute" }
  ];

  const imgs = [
    "img/loop1.JPG",
    "img/loop2.JPG",
    "img/loop3.JPG"
  ];

  return (
    <main>
      <Title>Über mich</Title>
      <Hero
        imageUrl="img/urban.webp"
        subtitle="Soulify Everything ♡"
        headline="Soul, HipHop & Jazz"
        buttonLink="/offer"
        buttonText="Angebot entdecken"
      ></Hero>

      <OnePagerNav links={onepagerNavLinks} />

      <div class="justify-center mt-30">
        <div class="content-container w-full">



          <h3>Meine Jugend</h3>
          <p id="jugend">Bereits mit 6 Jahren begann meine Reise als Musiker mit den ersten Klavierstunden. <br />
            Mit 8 Jahren wechselte ich zum Saxophon und begann meine Ausbildung bei <a target="_blank" class="link" href="https://www.musikschule-zenopeters.de/"> Zeno Peters.</a></p>
          <p>Diese Jahre waren sehr prägend für meine Musikalische Entwicklung. <br />
            Ich nam regelmäßig am Wettbewerb  <i>Jugend Musiziert</i>  teil und konnte einige Preise gewinnen im Ensemble als auch in der Solo Wertung.</p>
          <p>Mit 14 Jahren begann ich mich immer mehr für Pop und Soul Musik zu interessieren. Ich lernte autodidaktisch Gitarre und begann sehr viel zu experimentieren.</p>
          Mit 16 Jahren startete ich mein Solo Projekt mit Loopstation, Gitarre und Saxophon.



          <h3>Studium</h3>
          <p id="studium">Nach dem Abitur studierte ich in Mannheim <i>Jazz und Popularmusik.</i> Dort lernte ich sehr viel über Musikproduktion, Harmonielehre, Arrangieren und Improvisation.</p>
          <h3>Dirigat & Arrangements</h3>
          <p id="heute">Seit 2001 leite ich das Orchester des <a class="link" href="https://www.musikverein-zunsweier.de/">Musikverein Zunsweier.</a>
            <br /> Ich habe für das Orchester zahlreiche Arrangements geschrieben und aufgeführt.
          </p>
          Frage mich gerne an für ein Auftragsarrangement.
          <br />
          <button class="button-primary mt-10">Arrangement anfragen</button>

        </div>
      </div>
    </main>
  );
}
