import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String })
  say = 'Hello World';

  render(): TemplateResult {
    return html`<h1>${this.say}!</h1>`;
  }
}
