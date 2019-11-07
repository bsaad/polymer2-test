/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />`
import service from "./service.js";
export default class NestedChild extends Polymer.Element {
    static get is() { return 'nested-child'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'nested-child'
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
      <h2>Hello [[prop1]] from childddd!</h2>
      `;
    }
    constructor() {
        super();
        const data = service.getData();
        console.log("data");
    }
}
document.addEventListener('WebComponentsReady', () => {
    window.customElements.define(NestedChild.is, NestedChild);
});
