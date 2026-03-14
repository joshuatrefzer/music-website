import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";
import OnePagerNav from "~/components/OnePagerNav/OnePagerNav";

export default function Offer() {

  const onepagerNavLinks = [
    { id: "loop-project", label: "Loop Station" },
    { id: "electro-sax", label: "Elektro + Sax" },
    { id: "arrangements", label: "Arrangements" },
    { id: "orchesterleitung", label: "Orchesterleitung" }
  ];

  return (
    <main>
      <Title>Meine Projekte</Title>
      <Hero
        imageUrl="img/hero1.webp"
        subtitle=""
        headline="Meine Projekte"
      ></Hero>

      <OnePagerNav links={onepagerNavLinks} />

      <div class="content-container w-full">
        <section class="content-card" >
          <div class="text-container">
            <h3>Loopstation Projekt</h3>
            <p>Heute spiele ich vor allem Musik, die ich selbst sehr gerne höre. <br />
              Mein Solo Projekt mit Loopstation Gitarre und Saxophon ist mein Aushängeschild. <br /> Kaum etwas mache ich so gerne wie das. Viele Jaher an technischer Tüftelei stecken in diesem Projekt.</p>

            <p>Hier kommt Musikproduktion, Arrangement und Improvisation zusammen.</p>
            <p>Ich spiele mit diesem Projekt sehr viele Pop Songs, von denen ich meine eigene Version spiele. <br /> Alles aufgepimpt mit Jazzharmonien, knackig, luftigen Grooves und gesampelten Elementen..</p>
            <i>Soulify</i> Everrything! ♡
          </div>

          <div class="gallery-container">
            <img src="img/loop1.JPG" alt="Loopstation Projekt" />
            <img src="img/loop2.JPG" alt="Loopstation Projekt" />
            <img src="img/loop3.JPG" alt="Loopstation Projekt" />
          </div>

          <div class="mt-50" >
            <a href="/booking">
              <button class="button-primary">
                Jetzt Anfragen
              </button>
            </a>
          </div>

        </section>





        <span class="seperator"></span>
        <h3>Deep House + Sax</h3>
        <p>Ich produziere seit meiner Schulzeit elektronische Musik, die ich auch auflege und dazu Saxophon spiele.</p>
        <p>Meistens spiele ich aber zusammen mit meinem Kollegen und langjährigen Freund <a href="https://www.bikebalance.de/">Christian Gehrmann</a> <br />  Urbane Elektro Sounds, gepaart mit Funky Saxophon Riffs!</p>
        <p>Wir spielen auf Rooftop Bars, Outdoor Events und überall sonst wo es eine lockere urbane Atmosphäre braucht!</p>
        <span class="seperator"></span>
        <h3>Soul Transformer Band</h3>
        <p>Soul Musik vom Feinsten. <br /> Hier spiele ich als Saxophonist und leite die Bläser Section der Band und schreibe die Bläser- Arrangements</p>
      </div>
    </main>
  );
}
