import { LitElement, html } from 'lit-element';

class MyFooter extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <footer style="color: green;">Article</footer>
    `
  }
}

/**** The following syntax also serves as the class' export ****/
customElements.define('my-footer', MyFooter);
