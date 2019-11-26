import { LitElement, html, css } from 'lit-element';
import './5-shadow-DOM-styling-parent';

class MyChildElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      p { 
        font-weight: 600;
        text-transform: capitalize;
      }
    `
  }

  render() {
    return html`
      <my-parent-element>
        <p slot="child-1">Paragraph One</p>
        <p slot="child-2">Paragraph Two</p>
      </my-parent-element>
    `
  }
}

customElements.define('my-child-element', MyChildElement);