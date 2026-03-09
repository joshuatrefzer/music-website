import { createSignal } from "solid-js";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => setIsOpen(!isOpen());
  const closeMenu = () => setIsOpen(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/offer", label: "Angebot" },
    { path: "/about", label: "Über mich" },
    { path: "/booking", label: "Buchung" },
    { path: "/contact", label: "Kontakt" },
  ];

  return (
    <>
      {/* Burger Icon */}
      <div class={`burger ${isOpen() ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Fullscreen Menu */}
      <nav class={`mobile-nav ${isOpen() ? "open" : ""}`}>
        <ul>
          {links.map(link => (
            <li onClick={closeMenu}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}