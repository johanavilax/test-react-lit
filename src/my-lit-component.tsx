import { LitElement, html, css } from 'lit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyReactComponent from './MyReactComponent'; 
class MyLitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: blue;
    }
  `;

  firstUpdated() {
    const reactContainer = this.shadowRoot?.getElementById('react-root');
    if (reactContainer) {
      const root = ReactDOM.createRoot(reactContainer);
      root.render(<MyReactComponent />);
    }
  }

  render() {
    return html`
    <div>
     <p>This is a Lit element</p>
    </div>
      <div id="react-root"></div>
    `;
  }
}

customElements.define('my-lit-component', MyLitComponent);
