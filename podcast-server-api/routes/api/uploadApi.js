var express = require('express');
var upload = express.Router()
const path = require('path');
const fs = require('fs');

const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();

/*
* 图片上传接口:http://localhost:8089/api/upload
*/
upload.post('/upload',multipartMiddleware,(req,res)=> {
    console.log("上传文件名："+req.files.photoCotent.name)
    //上传图片参数
    var file = req.files.photoCotent;
    //定义上传文件的存放路径
    var des_file = path.join(__dirname,'../../public/images')+"\\"+file.originalFilename
    console.log(des_file) //上传路径：des_file
    console.log(file.path) //临时文件路径：file.path
    //将文件存入本地服务器文件中
    fs.readFile(file.path,function (err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err)
                res.json({code:1});
                return
            }
        })
    })
    //将图片存放的地址返回
    res.send( {
        code: 0,
        imgPath: `http://localhost:8089/images/${file.originalFilename}` //网络访问时public目录不能出现，public是虚拟目录
    })
})


module.exports = upload
