import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  constructor() {
    super();
    this.prop1 = 'text binding';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'pie';
  }

  // static get properties() {
  //   return {
  //     prop1: String,
  //     prop2: String,
  //     prop3: Boolean,
  //     prop4: String
  //   };
  // }

  render() {
    return html`
      <!-- Text Binding -->
      <div>${this.prop1}</div>

      <!-- Attribute Binding -->
      <div id=${this.prop2}>Attribute Binding</div>

      <!-- Boolean Attribute Binding -->
      <div>
        Boolean Attribute Binding
        <input type="text" ?disabled="${this.prop3}" />
      </div>

      <!-- Property Binding -->
      <div>
        Property Binding
        <input type="text" .value="${this.prop4}" />
      </div>

      <!-- Event Handler Binding -->
      <div>
        Event Handler Binding
        <button @click="${this.clickHandler}">Click</button>
      </div>
    `;
  }

  clickHandler(e) {
    console.log(`TARGET --> ${JSON.stringify(e.target)}`);
  }
}

customElements.define('my-element', MyElement);
