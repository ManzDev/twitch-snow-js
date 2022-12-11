import "./BasePlanet.js";

class SunStar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 400px;
        transform: translate(800px, 1200px);
      }

      :host(.appears) {
        animation: appears 6s ease forwards;
      }

      @keyframes appears {
        0%, 100% { transform: translate(800px, 1200px); }
        25%, 75% { transform: translate(800px, 200px); }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SunStar.styles}</style>
    <div class="container">
      <base-planet></base-planet>
    </div>`;
  }
}

customElements.define("sun-star", SunStar);
