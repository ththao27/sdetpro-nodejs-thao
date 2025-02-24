const todoEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(todoEndpoint)
    .then(getResponse)
    .then(validateResponse);

// Details implementation

function getResponse(response) {
    return response.json();
}

function validateResponse(response) {
    if (response.completed) {
        console.log(`Task is completed`);
    } else {
        console.log(`Task is in progress`);
    }
}