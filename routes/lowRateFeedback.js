const express = require('express') ;
const router = express.Router();

router.use(express.json());

router.post('/', (req,res)=>{
    console.log('Request body: ', req.body);
    res.status(200).json('Feedback for low rate recorded.');
})



module.exports = router;