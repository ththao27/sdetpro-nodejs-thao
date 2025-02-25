const Post = require("./Post.js");

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    
    async getTargetPost(userId, postId) {
        const posts = await this._getAllPosts();
        const targetPost = posts.find(post => post.userId === userId && post.id === postId);
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

    async fetchJson(endpoint) {
        const response = await fetch(url);
        return response.json();
    }

    async _getAllPosts() {
        const response = await fetch(`${this._baseUrl}/posts`);
        const allPosts = await response.json();
        return allPosts
    }
}

module.exports = RequestHandler;