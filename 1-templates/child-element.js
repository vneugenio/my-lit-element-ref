import { LitElement, html } from "lit-element";
import { ParentList } from "./container-element";

class ListItems extends LitElement {
  constructor() {
    super();
  }

  Alert() {
    alert('Hello World');
  }

  render() {
    return html`
      <parent-list>
        <li>One</li>
        <li>Two</li>
        <li @click=${() => this.Alert()}>Three</li>
      </parent-list>
    `;
  }
}

customElements.define("parent-list", ParentList);
customElements.define("list-items", ListItems);
