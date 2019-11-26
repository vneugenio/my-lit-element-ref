import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class MyElement extends LitElement {
  constructor() {
    super();
    this.classes = { orange: true, bold: true, invisible: false};
  }

  static get styles() {
    return css`
      .orange {
        color: orange;
      }

      .bold {
        font-weight: 600;
        text-transform: capitalize;
      }

      .invisible {
        visibility: hidden;
      }
    `;
  }

  render() {
    return html`
      <!-- Equivalent to: <div class="orange bold" >...</div> -->
      <p class="${classMap(this.classes)}">Styles derived from classMap</p>
    `;
  }
}

customElements.define('my-element', MyElement);