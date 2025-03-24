const Request = require("./Request");

// Child class / Sub class / Derived class
class GetRequest extends Request {

    // Overriding the parent class method
    setMethod() {
        super.setMethod("GET");
    }

    myNewMethod() {
        console.log("This is a new method");
    }
}


let getRequest = new GetRequest("https://jsonplaceholder.typicode.com/posts");
getRequest.setMethod();
getRequest.sendRequest();
