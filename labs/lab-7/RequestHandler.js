const Post = require('./Post.js');

class RequestHandler {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async getTargetPost(userId, postId) {
    const posts = await this._getAllPosts();
    const targetPost = posts.find(post => post.userId === userIdInput && post.id === postId);
    if (!targetPost) {
      throw new Error('Post not found');
    }
    const { userId, title, id, body } = targetPost; // Destructuring assignment
    return new Post(userId, title, id, body);
  }

  async getAllPostsFromUser(userId) {
    const allPosts = [];
    const posts = await this._getAllPosts();
    const userPosts = posts.filter(post => post.userId === userId);
    for (const post of userPosts) {
      const { userId, title, id, body } = post;
      allPosts.push(new Post(userId, title, id, body));
    }
    return allPosts;
  }

  async _getAllPosts() {
    const postEndpoint = `${this._baseUrl}/posts`;
    const response = await fetch(postEndpoint);
    const allPosts = await response.json();
    return allPosts;
  }
}

module.exports = RequestHandler;
