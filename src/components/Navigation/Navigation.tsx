import { createSignal } from "solid-js";
import "./Navigation.css";
import { PAGES } from "~/CONFIG";

export default function Navigation() {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => setIsOpen(!isOpen());
  const closeMenu = () => setIsOpen(false);

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
          {PAGES.map(link => (
            <li onClick={closeMenu}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}