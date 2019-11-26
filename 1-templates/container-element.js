import { LitElement, html } from 'lit-element';

class Parent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <h1>
        <slot></slot>
      </h1>
    `;
  }
}

export const ParentList = Parent;
