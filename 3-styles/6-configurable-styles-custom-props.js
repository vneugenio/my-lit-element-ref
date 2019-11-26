import { LitElement, html, css } from 'lit-element';

// Avoid placing expression inside <style>
const perClassStyle = html`
  <style>
    :host {
      display: block;
      font-family: Roboto;
      font-size: 14px;
    }
  </style>
`;

const blueText = html`
  <style>
    :host {
      color: blue;
    }
  </style>
`;

const redTExt = html`
  <style>
    :host {
      color: red;
    }
  </style>
`;

class MyElement extends LitElement {
  constructor() {
    super();
    this.perInstanceStyle = blueText;
  }

  render() {
    return html`
      ${perClassStyle} ${this.perInstanceStyle}
      <h1>Hello World</h1>
    `;
  }
}

customElements.define('my-element', MyElement);
