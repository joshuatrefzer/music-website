import { useLocation } from "@solidjs/router";
import "./Navigation.css";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active" : "";

  return (
    <nav class="navigation content-center">
      <a class={`navigation-links ${isActive("/")}`} href="/">Home</a>
      <a class={`navigation-links ${isActive("/offer")}`} href="/offer">Angebot</a>
      <a class={`navigation-links ${isActive("/about")}`} href="/about">Über mich</a>
      <a class={`navigation-links ${isActive("/booking")}`} href="/booking">Buchung</a>
      <a class={`navigation-links ${isActive("/contact")}`} href="/contact">Kontakt</a>
      
    </nav>
  );
}
