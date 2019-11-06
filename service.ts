class Service  {

    public async getData () {
        await this.timeout(1000);

        return {"value":"42"};

    }

    timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  }

  export default new Service();