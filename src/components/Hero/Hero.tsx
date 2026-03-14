import "./Hero.css";

interface HeroProps {
    imageUrl: string;
    headline: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}


export default function Hero(props: HeroProps) {

    function buttonIsValid() {
        return props.buttonText && props.buttonLink;
    }

    function renderButton() {
        if (buttonIsValid()) {
            return (
                <a href={props.buttonLink} class="hero-button">
                    {props.buttonText}
                </a>
            );
        }
        return null;
    }

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
            {renderButton()}
        </section>
    );
}
