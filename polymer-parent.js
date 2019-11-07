import "./nested-child.js";
setTimeout(() => {
    class PolymerParent extends Polymer.Element {
        static get is() { return 'polymer-dep-test'; }
        static get properties() {
            return {
                prop1: {
                    type: String,
                    value: 'polymer-dep-test'
                }
            };
        }
        static get template() {
            return Polymer.html `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <nested-child></nested-child>
      `;
        }
    }
    window.customElements.define(PolymerParent.is, PolymerParent);
}, 1000);
