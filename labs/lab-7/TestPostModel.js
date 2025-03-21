const readline = require('readline-sync');
const RequestHandler = require("./RequestHandler.js");

// Execution
main();

// Function Declaration
async function main() {
    let isInteracting = true;

    while (isInteracting) {
        printMenuApp();
        const userChoice = getUserChoice();
        const postEndpoint = new RequestHandler("https://jsonplaceholder.typicode.com");

        switch (userChoice) {
            case 0: 
                isInteracting = false;
                break;
            case 1: {
                let userId = getUserId();
                let postId = getPostId();
                const targetPost = await postEndpoint.getTargetPost(userId, postId);
                console.log('\n Target Post:', targetPost.toString());;
                break;
            }
            case 2: {
                let userId = getUserId();
                const userPosts = await postEndpoint.getAllPostsFromUser(userId);
                if (userPosts.length > 0) {
                    for (const post of userPosts) {
                        console.log(post.toString());
                    }
                } else {
                    console.log('No posts found for the user');
                }
                break;
            }
            default: 
                console.log("Invalid number, please try again\n");
                break;
        }
    }
}

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