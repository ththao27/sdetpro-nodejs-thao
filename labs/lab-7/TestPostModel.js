// TestPostModel.js
const RequestHandler = require("./RequestHandler");

// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    const userId = 1;
    const postId = 1;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    console.log("Fetching target post...");
    await requestHandler.printTargetPost(userId, postId);

    console.log("\nFetching all posts from user...");
    await requestHandler.printAllPosts(userId);
}