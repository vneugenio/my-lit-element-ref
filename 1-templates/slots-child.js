import { LitElement, html } from 'lit-element';
import { ParentElement } from './slots-parent-unnamed';

class ChildElement extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <parent-element>
        <span>Content in unnamed slot</span>
        <div slot="one">Content in slot named One</div>
        <div slot="two">Content in slot named Two</div>
        <div slot="three">Content in slot named Three</div>
      </parent-element>
    `;
  }
}

customElements.define('child-element', ChildElement);
customElements.define('parent-element', ParentElement);
