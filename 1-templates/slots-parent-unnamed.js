import { LitElement, html } from 'lit-element';

class Parent extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h1>Unnamed Slot</h1>
        <h3 style="color: orange;">
          <slot></slot>
        </h3>
      </div>
      <div>
        <h1>Named Slot</h1>
        <h3>
          <slot style="color: green;" name="one"></slot>
          <slot style="color: red;" name="two"></slot>
          <slot style="color: blue" name="three"></slot>
        </h3>
      </div>
    `;
  }
}

export const ParentElement = Parent;
