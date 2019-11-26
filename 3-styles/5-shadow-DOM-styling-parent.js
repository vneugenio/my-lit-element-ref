import { LitElement, html, css } from 'lit-element';

class MyParentElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      /* Styling slotted child elements */
      /* styling slotted child elements should only serve as "default" and should be able to overridden */
      ::slotted(p[slot="child-1"]) {
        color: red;
      }

      ::slotted(p[slot="child-2"]) {
        color: orange;
      }
    `;
  }

  render() {
    return html`
      <div>
        <slot name="child-1"></slot>
        <slot name="child-2"></slot>
      </div>
    `;
  }
}

customElements.define('my-parent-element', MyParentElement);
