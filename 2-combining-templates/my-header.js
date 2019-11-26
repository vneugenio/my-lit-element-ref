import { LitElement, html } from 'lit-element';

class MyHeader extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <header style="color: red;">Header</header>
    `
  }
}

/**** The following syntax also serves as the class' export ****/
customElements.define('my-header', MyHeader);
