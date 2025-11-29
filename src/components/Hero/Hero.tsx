import "./Hero.css";

interface HeroProps {
    imageUrl: string;
    headline: string;
    subtitle?: string;
}

export default function Hero(props: HeroProps) {
    return (
        <section
            class="hero"
            style={{ "background-image": `url(${props.imageUrl})` }}
        >
            <div class="hero-overlay" />
            <div class="hero-content">
                <h1>{props.headline}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </section>
    );
}
