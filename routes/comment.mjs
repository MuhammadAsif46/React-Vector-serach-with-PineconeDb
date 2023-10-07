import express  from "express";
const router = express.Router();


// GET     /api/v1/comment/:postId/:commentId
router.get("/comment/:postId/:commentId", (req, res) => {
    console.log('this is singup ', new Date());
    res.send('get all comments add ' + new Date());
});

// GET     /api/v1/comments/:postId
router.get("/comments/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

// PUT     /api/v1/comment/:postId/:commentId
router.put("/comment/:postId/:commentId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

// DELETE  /api/v1/comment/:postId/:commentId
router.delete("/comment/:postId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

export default router 