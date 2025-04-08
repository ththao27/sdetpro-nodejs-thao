const Request = require("./Request");

// Child class / Sub class / Derived class
class GetRequest extends Request {

    // Classs variable -> được sinh ra trước khi object được tạo ra
    static id = 1;

    constructor(url, method = 'GET') {
        super(); 
        this._url = url; // tham chiếu đến object con được tạo ra
        super.setMethod(method); // tham chiếu đến object cha được tạo ra
    }

    myNewMethod() { // method là hàm định nghĩa trong class -> chỉ xuất hiện khi và chỉ khi object được tạo ra
        // class function không thể overriding được, của class nào class đó xài
        console.log("This is a new method");
    }

    static doSomething() { // không thể xảy ra overriding
        console.log("This is a class method from the child class");
        console.log(GetRequest.id);
    }
}


let getRequest = new GetRequest();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.myNewMethod();
console.log(getRequest.id);