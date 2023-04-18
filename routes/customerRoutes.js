const express = require('express') ;
const router = express.Router();
const Customer = require('../models/customerModel')

router.use(express.json());

router.post('/', async (req,res)=>{
    const { name, email, job, company } = req.body
    console.log(name, email, job, company);
    const user = await Customer.create({
        name,
        email,
        job,
        company,
    })
    console.log(`Customer ${user} is logged in the database.`);
    res.status(200).json('Customer information recorded.');
})

module.exports = router;