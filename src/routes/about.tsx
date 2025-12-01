import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

import "./about.css";

export default function About() {
  return (
    <main>
      <Title>Über mich</Title>
      <Hero
        imageUrl="img/urban.webp"
        subtitle="Soulify Everything ♡"
        headline="Soul, HipHop & Jazz"
      ></Hero>

      <div class="justify-center">
        <div class="content-container">
          <h2 class="headline">Meine Projekte</h2>
          <h3>Loopstation Projekt</h3>
          <p>Heute spiele ich vor allem Musik, die ich selbst sehr gerne höre. <br />
            Mein Solo Projekt mit Loopstation Gitarre und Saxophon ist mein Aushängeschild. <br /> Kaum etwas mache ich so gerne wie das. Viele Jaher an technischer Tüftelei stecken in diesem Projekt.</p>

          <p>Hier kommt Musikproduktion, Arrangement und Improvisation zusammen.</p>
          <p>Ich spiele mit diesem Projekt sehr viele Pop Songs, von denen ich meine eigene Version spiele. <br /> Alles aufgepimpt mit Jazzharmonien, knackig, luftigen Grooves und gesampelten Elementen..</p>
          <i>Soulify</i> Everrything! ♡

          <span class="seperator"></span>
          <h3>Deep House + Sax</h3>
          <p>Ich produziere seit meiner Schulzeit elektronische Musik, die ich auch auflege und dazu Saxophon spiele.</p>
          <p>Meistens spiele ich aber zusammen mit meinem Kollegen und langjährigen Freund <a href="https://www.bikebalance.de/">Christian Gehrmann</a> <br />  Urbane Elektro Sounds, gepaart mit Funky Saxophon Riffs!</p>
          <p>Wir spielen auf Rooftop Bars, Outdoor Events und überall sonst wo es eine lockere urbane Atmosphäre braucht!</p>
          <span class="seperator"></span>
          <h3>Soul Transformer Band</h3>
          <p>Soul Musik vom Feinsten. <br /> Hier spiele ich als Saxophonist und leite die Bläser Section der Band und schreibe die Bläser- Arrangements</p>


          <h2 class="headline">My Journey</h2>
          <p>Bereits mit 6 Jahren begann meine Reise als Musiker mit den ersten Klavierstunden. <br />
            Mit 8 Jahren wechselte ich zum Saxophon und begann meine Ausbildung bei <a target="_blank" href="https://www.musikschule-zenopeters.de/"> Zeno Peters.</a></p>
          <p>Diese Jahre waren sehr prägend für meine Musikalische Entwicklung. <br />
            Ich nam regelmäßig am Wettbewerb  <i>Jugend Musiziert</i>  teil und konnte einige Preise gewinnen im Ensemble als auch in der Solo Wertung.</p>
          <p>Mit 14 Jahren begann ich mich immer mehr für Pop und Soul Musik zu interessieren. Ich lernte autodidaktisch Gitarre und begann sehr viel zu experimentieren.</p>
          Mit 16 Jahren startete ich mein Solo Projekt mit Loopstation, Gitarre und Saxophon.



          <h3>Studium</h3>
          <p>Nach dem Abitur studierte ich in Mannheim <i>Jazz und Popularmusik.</i> Dort lernte ich sehr viel über Musikproduktion, Harmonielehre, Arrangieren und Improvisation.</p>
          <h3>Dirigat & Arrangements</h3>
          <p>Seit 2001 leite ich das Orchester des <a href="https://www.musikverein-zunsweier.de/">Musikverein Zunsweier.</a>
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
