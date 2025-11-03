const Request = require('./Request');

// Child class / Sub class / Derived class
class PostRequest extends Request {
  // Overriding the parent class method
  setMethod() {
    super.setMethod('POST');
  }
}

let getRequest = new PostRequest('https://jsonplaceholder.typicode.com/posts');
getRequest.setMethod();
getRequest.sendRequest();
