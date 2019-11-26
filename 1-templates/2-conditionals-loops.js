import { LitElement, html } from 'lit-element';

class MyTemplate extends LitElement {
  constructor() {
    super();
    this.myName = ['Bolts', 'Narciso', 'Eugenio'];
    this.value = false;
  }

  render() {
    return html`
      <h2>
        ${this.myName.map(
          name =>
            html`
              <li>${name}</li>
            `
        )}
      </h2>
      <div>
        <h3>The value is ${this.value ? 'TRUE' : 'FALSE'}</h3>
      </div>
    `;
  }
}

customElements.define('my-template', MyTemplate);
