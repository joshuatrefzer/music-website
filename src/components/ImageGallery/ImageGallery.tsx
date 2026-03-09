import { Component, For } from "solid-js";
import "./ImageGallery.css";

interface CssOnlyImageGalleryProps {
  images: string[];
}

const CssOnlyImageGallery: Component<CssOnlyImageGalleryProps> = (props) => {
  const count = props.images.length;

  return (
    <div class={`image-gallery image-gallery--${count}`}>
      <For each={props.images}>
        {(src) => (
          <div class="image-gallery__item">
            <div class="image-gallery__backdrop" tabindex="-1">
              <img class="image-gallery__image" src={src} tabindex={0} />
            </div>
          </div>
        )}
      </For>

      <div class="image-gallery__keyboard-indicator">
        Use <code>Tab</code> or <code>Shift</code>+<code>Tab</code> to navigate between images
      </div>
    </div>
  );
};

export default CssOnlyImageGallery;
