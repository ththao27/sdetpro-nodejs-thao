const Post = require("./Post.js");

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    
    async getTargetPost(userIdInput, postId) {
        const posts = await this._getAllPosts();
        const targetPost = posts.find(post => post.userId === userIdInput && post.id === postId);
        if (!targetPost) {
            throw new Error("Post not found");
        }
        const {userId, title, id, body} = targetPost;
        return new Post(userId, title, id, body);
    }

    async getAllPostsByUserId(userId) {
        const posts = await this._getAllPosts();
        const userPosts = posts.filter(post => post.userId === userId);
        return userPosts;
    }

    async _getAllPosts() {
        const response = await fetch(`${this._baseUrl}/posts`);
        const allPosts = await response.json();
        return allPosts
    }
}

module.exports = RequestHandler;