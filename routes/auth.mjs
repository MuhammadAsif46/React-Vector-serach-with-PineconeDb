import express  from "express";
const router = express.Router();


router.post('/login', (req, res, next) => {
    console.log('this is login!', new Date());
    res.send('this is login' + new Date());



    
});

router.post("/singup", (req, res, next) => {
    console.log('this is singup', new Date());
    res.send('this is singup' + new Date());
});

export default router 
