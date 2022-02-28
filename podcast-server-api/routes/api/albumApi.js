var express = require('express');
var album = express.Router();
var AlbumObj = require('../../options/dbOptions').AlbumObj;

const path = require('path');
const fs = require('fs');
const request = require('request');
const multiparty = require('connect-multiparty');
const multipartMiddleware = multiparty();

//查询所有专辑信息：http://localhost:8089/api/findAlbum
album.get('findAlbum',(req,res)=>{
    AlbumObj.findAlbum().then(result=>{
        // res.json(result)
        res.json({
            code:Math.ceil(Math.random()*10000),
            datas:result
        })
    }).catch(err=>{
        console.log(err)
    })
})

//删除所有专辑信息：http://localhost:8089/api/deleteAlbum
album.delete('/deleteAlbum',(req,res)=>{
    AlbumObj.deleteAlbum(req.body.aid).then(result=>{
        res.json({
            code:Math.ceil(Math.random()*10000),
            msg:'删除成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})
//批量删除接口：http://localhost:8089/api/delAlbums
album.delete('/delAlbums',(req,res)=>{
    let a_ids=req.body.aids; //从前端获取到的多个a_id
    let aid_list=a_ids.split('');
    AlbumObj.delAlbums(aid_list).then(result=>{
        res.json({
            code:1002,
            msg:'批量删除成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})

//增加专辑接口:http://localhost:8089/api/addAlbum
album.post('/addAlbum',(req,res)=>{
    console.log(req.body.datas)
    let albums=req.body.datas
    console.log(albums)   //能获取
    AlbumObj.addAlbum(albums).then(result=>{
        res.json({
            code:1003,
            msg:'添加专辑成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})


//更改专辑信息：http://localhost:8089/api/updateAlbum
album.put('/updateAlbum',(req,res)=>{
    console.log(req.body.updateA)
    AlbumObj.updateAlbum(req.body.updateA).then(result=>{
        res.json({
            code:Math.ceil(Math.random()*10000),
            msg:'更新成功！'
        })
    }).catch(err=>{
        console.log(err)
    })
})
module.exports = album;
