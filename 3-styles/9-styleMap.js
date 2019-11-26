import { LitElement, html, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

class MyElement extends LitElement {
  constructor() {
    super();
    // In styleMap, hyphenated properties should be invoked as camel-case
    // values of properties as string
    this.styles = {
      color: 'white',
      backgroundColor: 'orange',
      textTransform: 'capitalize',
      padding: '20px',
      boxSizing: 'border-box',
      width: '500px'
    };
  }

  render() {
    return html`
      <h4 style="${styleMap(this.styles)}">
        This h4 element's styling is from a styleMap directive...
      </h4>
    `;
  }
}

customElements.define('my-element', MyElement);