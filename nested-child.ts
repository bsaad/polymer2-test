/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />
/// <reference path="./bower_components/polymer-decorators/polymer-decorators.d.ts" />

const {customElement, property} = Polymer.decorators;


import service from "./service"

@customElement('nested-child')
class NestedChild extends Polymer.Element {

  @property({type: String})
  private prop1: string = "yoyo"

    constructor() {
        super();
        this.logResult();
    }

    async logResult() {
      const data = await service.getData();
      
      console.log("data", data);
    }
  }
  