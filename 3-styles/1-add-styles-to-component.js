import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        div {
          color: red;
        }
      `,
      css`
        div p {
          font-weight: 600;
          text-transform: uppercase;
        }
      `,
      css`
        div > p#another {
          color: orange;
          font-size: 18px;
          font-weight: 400;
        }
      `
    ];

    // also the same as:
    // return [
    //   css`
    //     div {
    //       color: red;
    //     }
    //     div p {
    //       font-weight: 600;
    //       text-transform: uppercase;
    //     }
    //     div > p#another {
    //       color: orange;
    //       font-size: 18px;
    //       font-weight: 400;
    //     }
    //   `
    // ];
  }

  render() {
    return html`
      <div>
        <p>
          CSS Styling from styles() method
        </p>
        <p id="another">
          Another line of text...
        </p>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);
