import { LitElement, html, css } from 'lit-element';

// External stylesheets are not recommended and may cause issues
// Can cause flash-of-unstyled-content (FOUC) while they load

class MyElement extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <!-- The href in the css path is relative to the main document (index.html) -->
      <link rel="stylesheet" href="./stylesheet/stylesheet.css" />
      <p>Style is from an external stylesheet</p>
    `;
  }
}

customElements.define('my-element', MyElement);
