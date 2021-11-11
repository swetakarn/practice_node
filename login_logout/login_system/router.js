const e = require("express");
var express =require("express");
var router =express.Router();

const credential={
    username:"shubham@cronj.com",
    password:"123"
}



//login user
router.post('/login',(req,res) =>{
    if(req.body.username==credential.username && req.body.password==credential.password){
        req.session.user=req.body.username;
        //res.redirect('route/list');
        res.end("Login Successful..!")
    }
    else{
        res.end("invalid Username")
    }
});

//route for list
router.get('/list',(req,res)=>{
    if(req.session.user){
        res.render('list',{user:req.session.user})

    }else{
        res.send("Unauthorize user")
    }
})

//route for logut
router.get('/list',(req,res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }
        else{
            res.render('base',{title:"Express",logout:"logout successfully..."})
        }
    })
})

module.exports=router;