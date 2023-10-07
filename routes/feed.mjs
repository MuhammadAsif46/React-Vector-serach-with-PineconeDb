
import express  from "express";
const router = express.Router();


// GET     /api/v1/feed/:userId
router.get("/feed/:userId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

export default router 