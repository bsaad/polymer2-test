/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />`
import service from "./service.js";
class NestedChild extends Polymer.Element {
    static get is() { return 'nested-child'; }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'nested-child'
            }
        };
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
