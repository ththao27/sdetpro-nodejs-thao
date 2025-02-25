const Post = require("./Post");

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    
    async printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const posts = await this._getAllPosts();
        const targetPost = posts.find(post => post.userId === userId && post.id === postId);
        console.log(targetPost || 'Post not found');
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const posts = await this._getAllPosts();
        const userPosts = posts.filter(post => post.userId === userId);
        console.log(userPosts);

    }

    async fetchJson(endpoint) {
        const response = await fetch(url);
        return response.json();
    }

    async _getAllPosts(userId) {
        const response = await fetch(`${this._baseUrl}/posts`);
        const allPosts = await response.json();
        return allPosts.filter(function(post) {
            return this.userId === userId;
        })
    }
}

module.exports = RequestHandler;