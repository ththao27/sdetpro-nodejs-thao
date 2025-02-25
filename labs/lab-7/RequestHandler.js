const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const Post = require("./Post");


class RequestHandler {
    
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
        try {
            const response = await fetch(POST_ENDPOINT);
            const allPosts = await response.json();
            return allPosts.map(post => new Post(post.userId, post.id, post.title, post.body));
        } catch (error) {
            console.error('Error:', error);
            return [];
        }

    }
}

module.exports = RequestHandler;