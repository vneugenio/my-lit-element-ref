import { LitElement, html } from 'lit-element';

class MyProperties extends LitElement {
  static get properties() {
    return {
      myString: { type: String },
      myNumber: { type: Number },
      myBool: { type: Boolean },
      myArray: { type: Array },
      myObject: { type: Object }
    };
  }

  constructor() {
    super();
    this.myString = '';
    this.myNumber = 0;
    this.myBool = false;
    this.myArray = [];
    this.myObject = {};
  }

  
  render() {
    return html`
      <p>${this.myString}</p>
      <p>${this.myNumber}</p>
      <p>${this.myBool}</p>
      <p>${this.myArray.join(' ')}</p>
      <p>${this.myObject.hello}</p>
    `;
  }
}
customElements.define('my-properties', MyProperties);
// the following value will be overridden by attributes:
{/* <my-properties
  myString="Hello World"
  myNumber="8"
  myBool
  myArray="['one', 'two', 'three']"
  myObject="{hello:po}"
></my-properties> */}