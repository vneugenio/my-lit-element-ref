import { LitElement, html } from 'lit-element';

class MyArticle extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <article style="color: orange;">Article</article>
    `
  }
}

/**** The following syntax also serves as the class' export ****/
customElements.define('my-article', MyArticle);
