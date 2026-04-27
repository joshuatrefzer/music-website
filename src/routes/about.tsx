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

      ></Hero>

      <OnePagerNav links={onepagerNavLinks} />

      <div class="justify-center mt-30">
        <div class="content-container w-full">



          <h3 class="mst" id="jugend">Meine Jugend</h3>
          <p id="jugend">Bereits mit 6 Jahren begann meine Reise als Musiker mit den ersten Klavierstunden. <br />
            Mit 8 Jahren wechselte ich zum Saxophon und begann meine Ausbildung bei <a target="_blank" class="link" href="https://www.musikschule-zenopeters.de/"> Zeno Peters.</a></p>
          <p> Diese Jahre waren sehr prägend für meine Musikalische Entwicklung. <br />
            Ich nam regelmäßig am Wettbewerb  <i>Jugend Musiziert</i>  teil und konnte einige Preise gewinnen im Ensemble als auch in der Solo Wertung.</p>
          Mit 14 Jahren begann ich mich immer mehr für Pop und Soul Musik zu interessieren. <br /> Ich lernte autodidaktisch Gitarre und begann sehr viel zu experimentieren.
          <p>Mit 16 Jahren startete ich mein Solo Projekt mit Loopstation, Gitarre und Saxophon.</p>

          <div class="gallery-container">
            <img src="img/about2.jpg" alt="Elektro &  Sax Projekt" />
            <img src="img/about1.jpg" alt="Elektro &  Sax Projekt" />
            <img src="img/about3.jpg" alt="Elektro &  Sax Projekt" />
          </div>


          <h3 class="mst" id="studium">Studium</h3>
          <p>Nch dem Abitur wollte ich in Mannheim Jazz und Popularmusik studieren und bereitete mich intensiv auf die Aufnahmeprüfungen vor. <br /> Hier hatte ich vor allem Hilfe von <a class="link" href="https://www.instagram.com/joe_reinhuber_music/">Joe Reinhuber.</a> </p>
          <p id="studium">Ich bestand die Aufnahmeprüfung und daraufhin studierte ich in Mannheim <i>Jazz und Popularmusik.</i><br />
            Dort lernte ich sehr viel über Musikproduktion, Harmonielehre, Arrangieren und Improvisation.</p>
          <p>Ich arbeitete während des Studiums 3 Jahre in Tonstudio der Hochschule und lernte Musik zu schreiben, aufzunehmen und zu produzieren. <br />
            Zeitgleich konnte ich beim Saxophon Bootcamp bei <a target="_blank" class="link" href="http://www.skringer.de" >Thorsten Skringer</a> über ein Stipendium teilnehmen.<br />
            Noch heute ist Thorsten ein großes Vorbild für mich.
          </p>
          <p>Im Studium hatte ich Unterricht bei meinen Professoren Jürgen Seefelder und <a class="link" href="https://www.stefankarlschmid.net/">Stefan Karl Schmid</a> <br /> Welche mein Spielen und meine musikalischen Fährigkeiten wohl am meisten geprägt haben.</p>


          <h3 id="heute" class="mst">Heute</h3>
          <p>Heute bin ich hauptsächlich mit meinem Solo Projekt unterwegs und spiele auf vielen Events.<br />
            Ich leite ein Orchester, schreibe Arrangements und produziere Musik. <br />
            Ich liebe es Leute zu begeistern und ihnen eine gute Zeit zu bereiten. <br />
            Ich bin sehr dankbar für die Möglichkeiten, die ich habe und freue mich auf viele weitere Projekte!<br />
            <br />
            Man wird sehen, wohin es noch weiter geht!
          </p>
          <img style={"max-height: 550px; object-fit: cover"} src="img/way.jpg" alt="Elektro &  Sax Projekt" />
          Soulify Everrything! ♡

        </div>
      </div>
    </main>
  );
}
