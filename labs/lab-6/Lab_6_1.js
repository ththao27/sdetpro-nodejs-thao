/*
General info:
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts

6.1 
Please using PROMISE and thenable to solve this
Allow user to input an userid and postId, print out that post content
Print all posts for that user
*/
const readline = require('readline-sync');

const todoEndpoint = 'https://jsonplaceholder.typicode.com/posts';

// Program Interface
app();

// Main app

function app() {
    let isInteracting = true;

    printMenuApp();
    const userChoice = getUserChoice();

    switch (userChoice) {
        case 0:
            isInteracting = false;
            break;
        case 1: {
            const userId = getUserId();
            const postId = getPostId();

            validatePostId(postId)
                .then(isValidPost => {
                    if (!isValidPost) {
                        console.log('Invalid post ID');
                        return Promise.reject();
                    }
                    return validateUserId(userId);
                })
                .then(isValidUser => {
                    if (!isValidUser) {
                        console.log('Invalid user ID');
                        return Promise.reject();
                    }
                    return getPostContent(userId, postId);
                })
                .then(postContent => {
                    if (postContent) {
                        console.log('Post Content:', postContent);
                    }
                })
                .catch(() => {})
                .finally(app); 
            return;
        }
        case 2: {
            const userId = getUserId();
            validateUserId(userId)
                .then(isValid => {
                    if (!isValid) {
                        console.log('Invalid user ID');
                        return Promise.reject();
                    }
                    return getAllPostContent(userId);
                })
                .then(posts => {
                    if (posts) {
                        console.log('User Posts:', posts);
                    }
                })
                .catch(() => {})
                .finally(app);
            return;
        }
        default:
            console.log("Invalid number, please try again\n");
            app(); 
            return;
    }
}

// Support functions
function printMenuApp() {
    console.log(`
===  Application ===
    1. Search and print the post content you want
    2. Print all posts from the user you specify
    0. Exit the program
    `);
}

function getUserChoice() {
    return Number(readline.question('Please enter your choice: '));
}

function getUserId() {
    return Number(readline.question('Please enter your user ID: '));
}

function getPostId() {
    return Number(readline.question('Please enter your post ID: '));
}

function getResponse(response) {
    return response.json();
}

function validateUserId(userId) {
    return fetch(todoEndpoint)
        .then(getResponse)
        .then(function (response) {
            return response.some(function (item) {
                return item.userId === userId;
            });
        });
}

function validatePostId(postId) {
    return fetch(`${todoEndpoint}/${postId}`)
        .then(getResponse)
        .then(function (data) {
            return data && Object.keys(data).length !== 0;
        });
}

function getPostContent(userId, postId) {
    return fetch(`${todoEndpoint}/${postId}`)
        .then(getResponse)
        .then(function (data) {
            return data.userId === userId ? data : null;
        });
}

function getAllPostContent(userId) {
    return fetch(todoEndpoint)
        .then(getResponse)
        .then(function (response) {
            return response.filter(function (item) {
                return item.userId === userId;
            });
        });
}


