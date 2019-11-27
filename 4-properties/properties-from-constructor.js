import { LitElement, html } from 'lit-element';

class MyProperties extends LitElement {
  // Always declare types in static properties getter
  static get properties() {
    return {
      prop1: { type: String },
      prop2: { type: Number },
      prop3: { type: Boolean },
      prop4: { type: Array },
      prop5: { type: Object }
    };
  }

  // initialize values at the constructor
  constructor() {
    super();
    this.prop1 = 'Hello World';
    this.prop2 = 88;
    this.prop3 = false;
    this.prop4 = [1, 2, 3];
    this.prop5 = { subProperty: 'This is a value from a sub-property' };
  }

  render() {
    return html`
      <p>${this.prop1}</p>
      <p>${this.prop2}</p>
      <p>${this.prop3}</p>
      <p>${this.prop4[2]}</p>
      <p>${this.prop5.subProperty}</p>
    `;
  }
}

customElements.define('my-properties', MyProperties);
