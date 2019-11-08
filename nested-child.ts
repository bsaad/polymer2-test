/// <reference path="./bower_components/polymer/types/polymer-element.d.ts" />
/// <reference path="./bower_components/polymer-decorators/polymer-decorators.d.ts" />

const {customElement, property} = Polymer.decorators;


// import service from "./service"

@customElement('nested-child')
class NestedChild extends Polymer.Element {

  @property({type: String})
  private prop1: string = "yoyo"
  private service: Service;

    constructor() {
        super();
        this.service = new Service();
        this.logResult();
        
    }

    async logResult() {
      const data = await this.service.getData()
      console.log("data", data);
    }
  }

  class Service  {

    public async getData () {
        await this.timeout(1000);

        return {"value":"42"};

    }

    timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  