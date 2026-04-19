import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero/Hero";
import OnePagerNav from "~/components/OnePagerNav/OnePagerNav";

export default function Offer() {

  const onepagerNavLinks = [
    { id: "loop-project", label: "Loop Station" },
    { id: "electro-sax", label: "Elektro + Sax" },
    { id: "arrangements", label: "Arrangements & Orchesterleitung" },
  ];

  return (
    <main>
      <Title>Meine Projekte</Title>
      <Hero
        imageUrl="img/hero-projects.jpg"
        subtitle="& All About Music"
        headline="Meine Projekte"
      ></Hero>

      <OnePagerNav links={onepagerNavLinks} />

      <div class="content-container w-full">
        <section class="content-card" >
          <div class="text-container">
            <h3 class="mst" id="loop-project">Loopstation Projekt</h3>
            <p>Heute spiele ich vor allem Musik, die ich selbst sehr gerne höre. <br />
              Mein Solo Projekt mit Loopstation Gitarre und Saxophon ist mein Aushängeschild. <br /> Kaum etwas mache ich so gerne wie das. Viele Jahre an technischer Tüftelei stecken in diesem Projekt.</p>

            <p>Hier kommt Musikproduktion, Arrangement und Improvisation zusammen.</p>
            <p>Ich spiele mit diesem Projekt sehr viele bekannte Songs, von denen ich meine eigene Version spiele. <br /> Alles wird aufgepimpt mit Jazzharmonien, knackig, luftigen Grooves und gesampelten Elementen..</p>
            <p>Eine Symbiose aus Soul, Hip Hop und Jazz</p>
            <i>Soulify</i> Everrything! ♡
          </div>

          <div class="gallery-container">
            <img src="img/loop1.JPG" alt="Loopstation Projekt" />
            <img src="img/loop2.JPG" alt="Loopstation Projekt" />
            <img src="img/loop3.JPG" alt="Loopstation Projekt" />
          </div>

          <h2>Flexibel & spontan - mit dem Sound einer ganzen Band</h2>
          <p>Da ich hier alleine unterwegs bin, kann ich sehr flexibel auf verschiedene Situationen reagieren und spontan auf die Bedürfnisse der Zuschauer eingehen. <br />
            Auch die Absprache und Buchung ist unkompliziert, zuverlässig und schnell abgewickelt. </p>
          <p>Ich bin nicht abhängig von externen Dienstleistern und habe bei Bedarf meine eigene Tontechnik dabei.</p>

          <h4>Events, Messen, Hochzeiten..</h4>
          <p>Dieses Projekt eignet sich hervorragend für verschiedene Anlässe und Veranstaltungen.
            <br />Überall wo es luftige, lockere Beats mit jazzigem Saxophon und einer ordentlicheen Portion Soul benötigt..
          </p>


          <div class="mt-50" >
            <a href="/booking">
              <button class="button-primary">
                Jetzt Anfragen
              </button>
            </a>
          </div>

        </section>


        <span class="seperator"></span>
        <h3 class="mst" id="electro-sax">Elektro &  Sax</h3>
        <p>Ich produziere seit meiner Schulzeit elektronische Musik, die ich auch auflege und dazu Saxophon spiele. <br />Ich lege hierbei nur sehr ausgewählte Sounds auf und bin nicht als DJ in dieser Form unterwegs. <br />
          Stilistisch handelt es sich hier um Deep-House, Melodic-House, Down Tempo mit Saxophon on Top.</p>

        <div class="gallery-container">
          <img src="img/walk.JPG" alt="Elektro &  Sax Projekt" />
          <img src="img/elektro2.JPG" alt="Elektro &  Sax Projekt" />
        </div>

        <h4>Rooftop Bars, Afterwork, Open Air Events..</h4>
        <p>Wer liebt es nicht? <br />
          Ein kühles Getränk, schönes Wetter und treibende eletronische Beats mit Saxophon Sounds. <br /> So stelle zumindest Ich mir ein schönes Warming Up von einem erfolgreichen Event vor.</p>

        <p>Häufig spiele ich aber zusammen mit meinem Kollegen und langjährigen Freund und DJ <a class="link" href="https://www.bikebalance.de/">Christian Gehrmann</a> <br />  Urbane Elektro Sounds, gepaart mit Funky Saxophon Riffs!</p>
        Wir spielen zusammen in Rooftop Bars, auf Outdoor Events und überall sonst wo es eine lockere urbane Atmosphäre braucht, <br />die später in einem amtlichen DJ Set mündet. <br />

        <div class="gallery-container">
          <img style={"height:300px;"} src="img/elektro1.JPG" alt="Elektro &  Sax Projekt" />
        </div>


        <span class="seperator"></span>


        <h3 class="mst" id="arrangements" >Arrangements & <br /> Orchesterleitung</h3>
        Ich schreibe seit vielen Jahren Arrangements für Bläser, Orchester und Big Band. <br />
        Seit 2017 bin ich als Dirigent tätig und habe für verscheidenste Formationen schon etliche Arrangements geschrieben.<br />


        <div class="gallery-container">
          <img style={"height:200px;"} src="img/conduct-1.JPG" alt="Conducting" />
          <img style={"height:200px;"} src="img/conduct-2.JPG" alt="Conducting" />
          <img style={"height:200px;"} src="img/conduct-3.JPG" alt="Conducting" />
        </div>
        <h4>Rock & Pop Medleys | Solo Stücke | Orchester Arrangements mit Gesang</h4>

        <p >
          In meinem Musikstudium (Jazz & Popularmusik) habe ich mich intensiv mit dem Thema Arrangement beschäftigt. <br />
          Es macht mir sehr viel Spaß die Arrangements die ich schreibe,  <br />
          auch aufzuführen und mit den Menschen einzustudieren, meist bin ich an diesen Projekten mit beteiligt.
          <br />Ich finde, dass Arrangements zu den Menschen passen müssen, die es spielen sollen.<br />
        </p>

        <p>Frage mich gerne an für ein Projekt</p>

        <div>
          <a href="/contact">
            <button class="button-primary">Kontakt
            </button>
          </a>
        </div>







      </div>
    </main>
  );
}
