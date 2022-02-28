var express = require('express');
var realname = express.Router();
const path = require('path');
const fs = require('fs');
const request = require('request');
var RealnameObj = require('../../options/dbOptions').RealnameObj;

const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();

//展示接口：http://localhost:8089/api/showRealname
realname.get('/showRealname',(req,res)=>{
    RealnameObj.showRealname(req.query.rid).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err)
    })
})

//添加接口：http://localhost:8089/api/addRealname
realname.post('/addRealname',(req,res)=>{
    RealnameObj.addRealname(req.body.realname).then(result=>{
        res.json({
            code:1001,
            msg:'增加成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

//更改实名信息：http://localhost:8089/api/updateRealname
realname.put('/updateRealname',(req,res)=>{
    RealnameObj.updateRealname(req.body.realname).then(result=>{
        res.json({
            code:102,
            msg:'更改成功'
        })
    }).catch(err=>{
        console.log(err)
    })
})

//图片上传接口:http://localhost:8089/api/upload
realname.post('/upload',multipartMiddleware,(req,res)=>{
    console.log('上传文件名：'+req.files.photoContent.name);
    //上传图片参数
    var file=req.files.photoContent;
    //定义上传文件的存放路径
    var des_file=path.join(__dirname,'../../public/images')+"\\"+file.originalFilename;
    console.log('上传路径：'+des_file); //上传路径：des_file
    console.log('临时文件路径：'+file.path) //临时文件路径：file.path

    //将文件存入本地服务器文件
    fs.readFile(file.path,(err,data)=>{
        fs.writeFile(des_file,data,(err)=>{
            if (err){
                console.log('出错了'+err);
                // res.json({code:1});
                return;
            }
        })
    })
    //将图片存放的地址返回
    res.send({
        code:0,
        //网络访问时public目录不能出现 public是虚拟目录
        imgPath:`http://localhost:8089/images/${file.originalFilename}`
    })
})

/*
  图片显示：http://localhost:8089/api/showPic
*/
// realname.get('/showPic',function (req,res){
//
//     let filePath = req.query.imgPath;
//     console.log(filePath)
//     let pos = filePath.indexOf('9');//找到要删除文件的位置
//     console.log('pos:'+pos)
//     let sub = filePath.substring(pos+2); //截取子串,如images/2.png
//     console.log('sub:'+sub)
//     let temp = sub.split('/'); //将截取的子串以'/'分隔符转换成数组
//     console.log('temp:'+temp)
//     let realPath = path.join(__dirname,'../../public')+path.sep+temp[0]+path.sep+temp[1];
//     console.log('realPath:'+realPath)
//     // request(filePath).pipe(fs.createWriteStream('E:\\React\\react_ant\\public\\images\\'+temp[1]));
//     request(filePath).pipe(fs.createWriteStream(realPath));
//     res.json({
//         imgName: temp[1]
//     })
// })

module.exports = realname;