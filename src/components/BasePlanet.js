import "./CuteFace.js";

class BasePlanet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --texture: #485456;
        --border-width: calc(var(--size, 150px) * 0.06);
      }

      .container {
        width: var(--size, 150px);
        height: var(--size, 150px);
        background: var(--texture);
        box-shadow:
          30px 0px 0 #0003 inset,
          5px 5px 10px #0006;
        border: var(--border-width) solid #fff;
        border-radius: 50%;
        position: relative;
        box-sizing: border-box;
      }

      .container::before {
        --width: calc(var(--size, 150px) * 0.05);
        --height: calc(var(--size, 150px) * 0.05);
        inset: 15% 0 0 77%;
      }

      .container::after {
        --width: calc(var(--size, 150px) * 0.12);
        --height: calc(var(--size, 150px) * 0.06);
        inset: 9% 0 0 65%;
        transform: rotate(25deg);
      }

      .container::before,
      .container::after {
        content: "";
        background: #fff4;
        border-radius: 50%;
        position: absolute;
        width: var(--width);
        height: var(--height);
      }

      :host-context(.sun) {
        --texture: #fbbc05;
      }

      :host-context(.sun)::before {
        content: "";
        display: block;
        width: 200%;
        height: 200%;
        position: absolute;
        inset: 0;
        animation: shine 6s ease-in-out infinite alternate;

        background-image: repeating-conic-gradient(gold 0 2%, #0000 2% 5%);
        border-radius: 50%;
        -webkit-mask-image: radial-gradient(#000 25%, #0000 55%, transparent 70%);
      }

      @keyframes shine {
        0% {
          transform: translate(-25%, -25%) rotate(0);
        }

        100% {
          transform: translate(-25%, -25%) rotate(160deg);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BasePlanet.styles}</style>
    <div class="container">
      <cute-face></cute-face>
    </div>`;
  }
}

customElements.define("base-planet", BasePlanet);
