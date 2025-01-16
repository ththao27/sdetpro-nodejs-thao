const teo = {
    name: "Teo",
    age: 25,
    // Nested object
    bankAccount: {
        checking: {
            accountNumber: '123',
        },
        savings: {
            accountNumber: '321',   
        }
    }
}

teo = 1; // báo lỗi do thay đổi 1 constant

teo.name = "Ti"; // không báo lỗi, được phép thay đổi property của 1 constant object

let ti = teo; // tham chiếu tới cùng 1 vùng nhớ giống nhau

ti.name = "Ti";
ti.bankAccount.accountNumber = "124"

console.log(teo);
console.log(ti);

// PV hỏi về copy toàn bộ object

//1. Shallow copy -> chỉ handle được one level object -> nested object -> ăn hành
let tun = {...teo};
tun.name = "Tun"; 
tun.bankAccount.accountNumber = "124"; 

//2. Shallow copy - handle for nested object as well, can not handle with value is function
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.accountNumber = "125";

console.log(Object.keys(teo));  // get all keys
console.log(Object.values(teo)); // get all values
console.log(Object.entries(teo)); // get all entries

// Mozilla Developer Network


