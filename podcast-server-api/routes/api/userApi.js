var express = require('express');
var user = express.Router();

//导入dbOptions封装函数中的UserObj
var UserObj = require('../../options/dbOptions').UserObj;

const path=require('path')
const fs=require('fs')
const request=require('request');

//注册用户：http://localhost:8089/api/registerUser

//登录：http://localhost:8089/api/loginUser

//查询用户个人信息: http://localhost:8089/api/showUser
user.get('/showUser',(req,res)=>{
    UserObj.showUser(req.query.uid).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

//更改用户个人信息: http://localhost:8089/api/updateUser
user.put('/updateUser',(req,res)=>{
    UserObj.updateUser(req.body.user).then(result=>{
        res.json({
            code:Math.ceil(Math.random()*100000),
            msg:'更新成功'
        })
    }).catch(err=>{
        console.log(err);
    })
})

//图片显示：http://localhost:8089/api/showPic
user.get('/showPic',function (req,res) {
    console.log(req.query.uid);
    UserObj.showPic(req.query.uid).then(user=>{
        console.log(user);
        //http://localhost:8089/images/光.jpg
        let filePath=user.u_picture;
        console.log(filePath)
        let sub=filePath.replace('http://localhost:8089/images/','E:\\Web前端德云\\播客创作中心\\podcast-server-api\\public\\images\\');
        console.log(sub)

        request(sub).pipe(fs.createWriteStream(sub))
        // res.json(sub.pipe(fs.createWriteStream(sub)))
    })
})

module.exports=user;