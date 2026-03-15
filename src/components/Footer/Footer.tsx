import { LEGALS, PAGES, SOCIALS } from "~/CONFIG";
import "./Footer.css";

export default function Footer() {

    function renderSocials() {
        return SOCIALS.map(social => {
            if (social.url) {
                return (
                    <a class="svg-link" href={social.url} target="_blank" rel="noopener noreferrer">
                        <img src={"/icons/" + social.name.toLocaleLowerCase() + ".svg"} alt={social.name} />
                    </a>
                );
            }
            return null;
        });
    }


    function renderPages() {
        return PAGES.map(link => (
            <a class="link" href={link.path}>{link.label}</a>
        ));
    }


    function renderLegals() {
        return LEGALS.map(link => (
            <a class="link legals" href={link.path}>{link.label}</a>
        ));
    }

    return (
        <footer class="site-footer">
            <span class="footer-separator"></span>

            <div class="full-row">
                {renderPages()}
            </div>


            <div class="social-links">
                {renderSocials()}
            </div>




            <div class="row-between">
                <div>© 2024 Joshua Trefzer</div>
                <div class="legal-links">
                    {renderLegals()}
                </div>
                <div><i>Soulify</i> Everrything! ♡</div>
            </div>

            <span class="footer-separator"></span>

        </footer>
    );
}
