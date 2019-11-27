import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    this.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    console.log(`THIS --> ${JSON.stringify(this)}`);
    console.log(`E --> ${JSON.stringify(e.target)}`);
    console.log(`Origin: ${e.composedPath()} `)
  }

  render() {
    return html`
      <button id="event-origin">Click Me</button>
    `
  }
}

customElements.define('my-element', MyElement);