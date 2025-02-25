class Post {
    constructor (userId, title, postId, body) {
        this._userId = userId;
        this._title = title;
        this._postId = postId;
        this._body = body;
    }
    get userId() {
        return this._userId;
    }
    get title() {
        return this._title;
    }
    get postId() {
        return this._postId;
    }
    get body() {
        return this._body;
    }
    set userId(userId) {
        this._userId = userId;
    }
    set title(title) {
        this._title = title;
    }
    set postId(postId) {
        this._postId = postId;
    }
    set body(body) {
        this._body = body;
    }

}
module.exports = Post;