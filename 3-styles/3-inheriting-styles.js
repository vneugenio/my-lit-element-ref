import { LitElement, html, css } from 'lit-element';

class SuperElement extends LitElement {
  static get styles() {
    return css`
      div { color: red; }
    `;
  }
}

class ChildElement extends SuperElement {
  constructor() {
    super();
  }

  static get styles() {
    return [
      super.styles,
      css`h2 { font-weight: 600; text-transform: capitalize; }`
    ];
  }

  render() {
    return html`
      <div>
        This div inherits style from parent Class for the color
      </div>
    `;
  }
}

customElements.define('child-element', ChildElement);