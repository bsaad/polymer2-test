/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />
/// <reference path="./bower_components/polymer-decorators/polymer-decorators.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { customElement, property } = Polymer.decorators;
import service from "./service";
let NestedChild = class NestedChild extends Polymer.Element {
    constructor() {
        super();
        this.prop1 = "yoyo";
        this.logResult();
    }
    logResult() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield service.getData();
            console.log("data", data);
        });
    }
};
__decorate([
    property({ type: String })
], NestedChild.prototype, "prop1", void 0);
NestedChild = __decorate([
    customElement('nested-child')
], NestedChild);
//# sourceMappingURL=nested-child.js.map