const db = require('../db');

class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      'INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *',
      [title, content, userId],
    );
    res.json(newPost.rows[0]);
  }

  async getPosts(req, res) {
    const posts = await db.query('SELECT * FROM post');
    res.json(posts.rows);
  }

  async getOnePost(req, res) {
    const id = req.params.id;
    const post = await db.query('SELECT * FROM post WHERE id = $1', [id]);
    res.json(post.rows[0]);
  }

  async updatePost(req, res) {
    const { id, title, content } = req.body;
    const newPost = await db.query(
      'UPDATE post SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id],
    );
    res.json(newPost.rows[0]);
  }

  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query('DELETE FROM post WHERE id = $1', [id]);
    res.json(post.rows[0]);
  }
}
