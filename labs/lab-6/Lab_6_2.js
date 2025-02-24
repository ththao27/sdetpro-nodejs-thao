const readline = require('readline-sync');

const todoEndpoint = 'https://jsonplaceholder.typicode.com/posts';

// Program Interface
app();

// Main app
async function app() {
    let isInteracting = true;

    while (isInteracting) {
        printMenuApp();
        const userChoice = getUserChoice();

        switch (userChoice) {
            case 0:
                isInteracting = false;
                break;
            case 1:
                await handleSearchPost();
                break;
            case 2:
                await handlePrintUserPosts();
                break;
            default:
                console.log("Invalid number, please try again\n");
                break;
        }
    }
}

async function handleSearchPost() {
    try {
        const userId = getUserId();
        const postId = getPostId();

        const isValidPost = await validatePostId(postId);
        if (!isValidPost) {
            console.log('Invalid post ID');
            return;
        }

        const isValidUser = await validateUserId(userId);
        if (!isValidUser) {
            console.log('Invalid user ID');
            return;
        }

        const postContent = await getPostContent(userId, postId);
        if (postContent) {
            console.log('Post Content:', postContent);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function handlePrintUserPosts() {
    try {
        const userId = getUserId();
        const isValid = await validateUserId(userId);

        if (!isValid) {
            console.log('Invalid user ID');
            return;
        }

        const posts = await getAllPostContent(userId);
        if (posts) {
            console.log('User Posts:', posts);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Support functions
function printMenuApp() {
    console.log(`\n===  Application ===
    1. Search and print the post content you want
    2. Print all posts from the user you specify
    0. Exit the program\n`);
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

async function fetchJson(url) {
    const response = await fetch(url);
    return response.json();
}

async function validateUserId(userId) {
    const response = await fetchJson(todoEndpoint);
    return response.some(item => item.userId === userId);
}

async function validatePostId(postId) {
    const data = await fetchJson(`${todoEndpoint}/${postId}`);
    return data && Object.keys(data).length !== 0;
}

async function getPostContent(userId, postId) {
    const data = await fetchJson(`${todoEndpoint}/${postId}`);
    return data.userId === userId ? data : null;
}

async function getAllPostContent(userId) {
    const response = await fetchJson(todoEndpoint);
    return response.filter(item => item.userId === userId);
}
