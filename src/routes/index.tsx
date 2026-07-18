import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <Hero
        imageUrl="img/hero1.webp"
        subtitle="Saxophonist, Loop Artist & Arrangeur"
        headline="Ich bin Josh"
      ></Hero>

      <div class="content-container w-full">

        <section>
          <h3 class="mst">Soul.  HipHop.  Jazz.</h3>
          <p>Meine Musik ist immer geprägt von diesem Cocktail. Ich höre selbst gerne diese Musik und spiele sie noch lieber selbst! <br />
          </p>
          <p>Meine Leidenschaft für urbane Musik habe ich bereits in frühen Jahren entwickelt. </p>
          <p>Soulify Everrything! ♡</p>
          <div class="gallery-container">
            <img src="img/git.jpg" alt="Elektro &  Sax Projekt" />
            <img src="img/soul.jpg" alt="Elektro &  Sax Projekt" />
          </div>
          <h3 class="mt-50">
            Musik für Ihr Event <br />
          </h3>
          <h4>
            Fimenevents –
            Messen –
            Hochzeiten –
            Afterwork-Partys
          </h4>
          <p>Sie planen eine Veranstaltung und suchen nach einem besonderen musikalischen Highlight? <br />
            Ich biete Ihnen ein vielseitiges Spektrum an Live-Musik für unterschiedlichste Events.  <br />
            Ob als Solo-Act mit Loop Station, Gitarre und Saxophon oder mit einem stilvollen Lounge-Elektro-Set inklusive Saxophon, <br />
            ich sorge für die passende Atmosphäre mit urbanen Grooves. <br />
            Gerne gestalte ich Ihre Veranstaltung mit individueller Musik, die sich perfekt an den Anlass und Ihre Wünsche anpasst.
          </p>
          <div class="mt-50" >
            <a href="/offer">
              <button class="button-primary">
                Mehr über meine Projekte erfahren →
              </button>
            </a>
          </div>
        </section>
         <span class="seperator"></span>
        <section>
          <h3>About Me</h3>
          <p>Ich mache seit meinem 8. Lebensjahr Musik und habe ein Musikstudium in Jazz & Popularmusik. <br /> Heute habe ich einige Projekte, mit denen ich unterwegs bin und produziere meine eigene Musik.</p>
          <div class="gallery-container">
            <img src="img/night.jpg" alt="Elektro &  Sax Projekt" />
          </div>
          <p class="mt-50">..Weitere biografische Infos findest du hier</p>
          <div class="mt-50" >
            <a href="/about">
              <button class="button-primary">
                Mehr erfahren
              </button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
