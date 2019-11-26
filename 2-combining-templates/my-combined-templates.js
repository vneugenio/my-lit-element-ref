import { LitElement, html } from 'lit-element';
import './my-header';
import './my-article';
import './my-footer';

class MyCombinedTemplates extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `
  }
}

/**** The following syntax also serves as the class' export ****/
customElements.define('my-combined-templates', MyCombinedTemplates);
