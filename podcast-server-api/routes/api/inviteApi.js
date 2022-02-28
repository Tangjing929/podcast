var express = require('express');
var invite = express.Router();
var InviteObj = require('../../options/dbOptions').InviteObj;

//邀请查询：http://localhost:8089/api/showInvite
invite.get('/showInvite',(req,res)=>{
    console.log(req.query.iinvitetime.split(' ')[0])
    InviteObj.showInvite(req.query.uid,req.query.iinvitetime).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err)
    })
})
// //邀请部分查询：http://localhost:8089/api/showbfInvite
// invite.get('/showbfInvite',(req,res)=>{
//     InviteObj.showbfInvite(req.query.showbfInvite).then(result=>{
//         res.json(result);
//     }).catch(err=>{
//         console.log(err)
//     })
// })

module.exports = invite;
