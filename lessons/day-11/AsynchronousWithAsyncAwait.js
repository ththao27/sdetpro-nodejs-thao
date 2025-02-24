const url = 'https://jsonplaceholder.typicode.com/posts';

main();

async function main() {
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
}


function sendRequest(url) {
    console.log(`1. Sending request to the endpoint ${url}...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ status: 200 }); // dùng để trả về kết quả
        }, 2 * 1000);
    });
}

function processResponse(response) {
    console.log(`2. Processing response...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(response.status);
        }, 3 * 1000);
    });
}

// Mimic Synchronous
function validateResponse(reponseStatus) {
    console.log(`3. Validating response...`);
    if (reponseStatus === 200) {
        console.log(`PASSED!`);
    } else {
        console.log(`FAILED!`);
    }
}