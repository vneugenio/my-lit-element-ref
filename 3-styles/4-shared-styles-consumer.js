import { LitElement, html, css } from 'lit-element';
import { buttonStyles } from './4-shared-styles-source';

class MyButtons extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [
      buttonStyles,
      css`
        button {
          text-transform: capitalize;
        }
      `
    ];
  }

  render() {
    return html`
      <div>
        <button class="blue-button">this is a blue button</button>
      </div>
      <div>
        <button class="red-button">this is a red button</button>
      </div>
    `;
  }
}


customElements.define('my-buttons', MyButtons);