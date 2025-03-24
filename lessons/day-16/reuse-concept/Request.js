// Parent class / Super class / Base class

class Request {
    constructor( url, header = {}) {
        this.url = url;
        this.header = header;
        this.method = '';
    }

    setMethod(method){
        this.header = {...this.header, method: method};
    }

    sendRequest(){
        console.log(`Send request with the header: ${JSON.stringify(this.header)}`);
    }

    verifyResponse(){
        console.log(`Verify response ...`);
    }
}

module.exports = Request;