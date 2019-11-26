import { LitElement, html, css, unsafeCSS } from 'lit-element';

// by default, a css literal is accepted to prevent
// malicious code from being injected
const mainColor = css`red`;

class MyElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    // to bypass safety or override / allow non css literal to be accepted:
    const unsafeValue = 'orange';

    return css`
      div {
        color: ${mainColor};
      }

      /* Try to avoid using unsafeCSS method */
      h5 {
        color: ${unsafeCSS(unsafeValue)};
      }
    `;
  }

  render() {
    return html`
      <div>
        Text color from a css expression
      </div>
      <h5>
        Color value from an unsafe value ---> Try to avoid using unsafeCss
      </h5>
    `;
  }
}

customElements.define('my-element', MyElement);
