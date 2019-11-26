import { LitElement, html } from 'lit-element';

class MyTemplate extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Some Text Content ...</h2>
      </div>
    `
  }
}

customElements.define('my-template', MyTemplate);
