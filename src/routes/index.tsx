import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Title>Home</Title>
      <Hero
        imageUrl="img/hero1.webp"
        subtitle="Saxophonist, Loop Artist & Arrangeur, Produzent.."
        headline="Ich bin JOSH"
      ></Hero>

      <div class="content-container w-full">

        <section>
          <h3 class="mst">Soul.  HipHop.  Jazz. Elektro.</h3>
          <p>Meine Musik ist immer geprägt von diesem Mix. Ich höre selbst gerne diese Musik und spiele sie noch lieber selbst! <br />
            Ich spiele projektbasiert immer wieder bei verschiedenen Projekten mit und bin aber primär selbst mit meinem Solo Projekt unterwegs. <br />
          </p>
          <p>Ich liebe urbane Musik. Ich spiele selbst nur Musik die ich liebe, also ist meine Musik immer irgendwie urban!</p>
          <p>Soulify Everrything! ♡</p>
          <div class="gallery-container">
            <img src="img/git.jpg" alt="Elektro &  Sax Projekt" />
            <img src="img/soul.jpg" alt="Elektro &  Sax Projekt" />
          </div>
          <h4 class="mt-50">Fimenevents | Messen | Hochzeiten | Afterwork-Party</h4>
          <p>Diese Art der Veranstaltungen bediene ich sicherlich am häufigsten, bin aber auch immer offen für neue Formate! </p>
          <div class="mt-50" >
            <a href="/offer">
              <button class="button-primary">
                Mehr erfahren
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
