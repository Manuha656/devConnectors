const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')

//@route  GET /api/auth
//@desc   Test Route
//@access Public
router.get('/',auth,async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error.')
    }
})


//@route  POST /api/auth
//@desc   Authenticate User & get token
//@access Public
router.post('/',[
    check('email','Please include a valid email.').isEmail(),
    check('password','Password is required.').exists()    
],async (req,res)=>{
    const err = validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({err:err.array()})
    }
    
    const {email, password} = req.body

    try{
        //See if user enters correct email and pwd
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: [{msg: 'Invalid Credentials'}]})
        }

        const isMatch = await bcrypt.compare(password,user.password)    
        if(!isMatch){
            return res.status(400).json({error: [{msg: 'Invalid Credentials'}]})
        }

        //Return jsonwebtoken after successful login
        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err,token)=>{
                if(err) throw err
                res.json({token})
            }
        )

    }catch(error){
        console.log(error.message)
        res.status(500).send('Server error.')
    }
})

module.exports = router