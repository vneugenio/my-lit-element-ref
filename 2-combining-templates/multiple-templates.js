import { LitElement, html } from 'lit-element';

class MultipleTemplates extends LitElement {
  constructor() {
    super();
  }

  get headerTemplate() {
    return html`<header>Header</header>`;
  }

  get articleTemplate() {
    return html`<article>Article</article>`;
  }

  get footerTemplate() {
    return html`<footer>Footer</footer>`;
  }

  render() {
    return html`
      ${this.headerTemplate}
      ${this.articleTemplate}
      ${this.footerTemplate}
    `;
  }

}

customElements.define('multiple-templates', MultipleTemplates);
