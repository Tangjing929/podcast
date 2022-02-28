const Album = require('../db/model/AlbumModel');
const Data = require('../db/model/DataModel');
const Invite = require('../db/model/InviteModel');
const Platform = require('../db/model/PlatformModel');
const Realname = require('../db/model/RealnameModel');
const Settlement = require('../db/model/SettlementModel');
const User = require('../db/model/UserModel');
const Program = require('../db/model/ProgramModel');

const Op = require('sequelize').Op;

//用户对象
var UserObj={
    //注册用户      registerUser
    //登录         loginUser
    //展示个人信息   showUser
    async showUser(uid){
        const result=await User.findOne({
            where:{
                u_id:uid
            }
        });
        return result;
    },
    //更改个人信息
    async updateUser(params){
        const result=await User.update({
            u_username:params.uusername,
            u_password:params.upassword,
            u_picture:params.upicture,
            u_phone:params.uphone,
            u_qq:params.uqq,
            u_wechat:params.uwechat,
            u_email:params.uemail,
            u_introduce:params.uintroduce,
        },{
            where:{
                u_id:params.uid,
            }
        });
        return result;
    },
    //图片显示
    async showPic(uid){
        const result=await User.findOne({
            where:{
                u_id:uid
            }
        })
        return result;
    }
}

//专辑对象
var AlbumObj={
    //创建专辑 addAlbum
    async addAlbum(params){
        const result=await Album.create({
            u_id:params.auid,
            d_id:params.adid,
            a_name:params.datas.aname,
            a_introduce:params.datas.aintroduce,
            a_picture:params.datas.apicture,
            a_brief:params.datas.abrief,
            a_classify:params.aclassify,
            a_label1:params.alabel1,
            a_label2:params.alabel2,
            a_author:params.datas.aauthor,
            a_state:params.astate,
            a_time:params.atime,
            a_sum:params.datas.asum,
            a_sort:params.asort,
            a_song:params.datas.asong,
            a_songname:params.datas.asongname,
            a_starting:params.astarting,
            a_poster:params.aposter,
            a_manage:params.amanage
        });
        return result;
    },
    //查找一个专辑 findOneAlbum
    async findOneAlbum(aid){
        const result=await Album.findOne({
            where:{
                a_id:aid,
            }
        });
        return result;
    },
    //查找专辑  findAlbum
    async findAlbum(){
        const result=await Album.findAll({
            attributes:['a_id','a_picture','a_name','a_state','a_classify','a_label2','a_time','a_manage'],
            raw:true
        })
        return result
    },
    //删除专辑 deleteAlbum
    async deleteAlbum(aid){
        const result=await Album.destroy({
            where:{
                a_id:aid,
            }
        });
        return result;
    },
    //批量删除 delAlbums
    async delAlbums(aid_list){
        const result=await Album.destroy({
            where:{
                a_id:{
                    [Op.in]:aid_list
                }
            }
        });
        return result;
    },
    //更改专辑 updateAlbum
    async updateAlbum(params){
        console.log(params)
        const result=await Album.update({
            a_name:params.updateData.aname,
            // a_introduce:params.aintroduce,
            a_picture:params.updateData.apicture,
            // a_brief:params.abrief,
            a_classify:params.updateData.aclassify,
            // a_label:params.alabel,
            // a_author:params.aauthor,
            a_state:params.updateData.astate,
            // a_sort:params.asort,
            // a_song:params.asong,
            // a_songname:params.asongname,
            // a_starting:params.astarting,
            // a_poster:params.aposter,
        },{
            where:{
                a_id:params.aid,
            }
        })
        return result;
    }
}

//数据对象
var DataObj={
    //展示数据 showData
    async showData(uid){
        const result=await Data.findAll({
            where:{
                u_id:uid
            }
        })
        for(let i=0;i<result.length;i++){
            result[i].ddaymoney = result[i].d_withdrawed+result[i].d_willwithidraw
        }
        return result;
    },

    //根据专辑id查询专辑的数据
    async showAlbumData(ai_d,ui_d){
        const result = await Data.findAll({
            where:{
                a_id:ai_d,
                u_id:ui_d
            }
        })
        return result;
    }
}

//实名对象
var RealnameObj={
    //增加实名信息 addRealname
    async addRealname(params){
        const result = await Realname.create({
            u_id:params.uid,
            r_name:params.rname,
            r_cardtype:params.rcardtype,
            r_identity:params.ridentity,
            r_fphoto:params.rfphoto,
            r_bphoto:params.rbphoto,
            r_hphoto:params.rhphoto,
            r_timetype:params.rtimetype,
            r_endtime:params.rendtime,
        })
    },

    //展示实名信息 showRealname
    async showRealname(rid){
        const result = await Realname.findOne({
            where:{
                r_id:rid
            }
        });
        return result;
    },
    //更改实名信息 updateRealname
    async updateRealname(params){
        const result=await Realname.update({
            r_name:params.rname,
            r_identity:params.ridentity,
            r_fphoto:params.rfphoto,
            r_bphoto:params.rbphoto,
        },{
            where:{
                r_id:params.rid,
            }
        })
        return result
    }
}

//平台对象
var PlatformObj={
    //增加平台信息 addPlatform
    async addPlatform(params){
        const result = await Platform.create({
            u_id:params.uid,
            p_name:params.pldatas.pname,
            p_username:params.pldatas.pusername,
            p_fans:params.pldatas.pfans,
            p_amount:params.pldatas.pamount,
            p_link:params.pldatas.plink,
            p_picture:params.pldatas.ppicture,
        });
        return result;
    },


    //更改平台信息 updatePlatform
    async updatePlatform(params){
        const result = await Platform.update({
            p_name:params.pname,
            p_username:params.pusername,
            p_fans:params.pfans,
            p_amount:params.pamount,
            p_link:params.plink,
            p_picture:params.ppicture,
        },{
            where:{
                p_id:params.pid,
            }
        });
        return result;
    },

    //展示平台信息 showPlatform
    async showPlatform(pid){
        const result = await Platform.findOne({
            where:{
                p_id:pid
            }
        });
        return result;
    }
}

//邀请对象
var InviteObj={
    //展示邀请信息 showInvite
    async showInvite(uid,iinvitetime){
        const result=await Invite.findAll({
            where:{
                u_id:uid,
                i_invitetime:iinvitetime
                // [Op.like]:iinvitetime
            }
        })
        return result;
    },
    // //展示部门邀请信息 showbfInvite
    // async showbfInvite(uid){
    //     const result=await Invite.find({
    //         where:{
    //             //uid:uid,
    //             iinvitetime:iinvitetime
    //         }
    //     })
    // }
}

//结算对象
var SettlementObj={
    //展示结算信息 showSettlement
    async showSettlement(sid){
        const result = await Settlement.findOne({
            where:{
                s_id:sid
            }
        })
        return result;
    },

    //增加结算信息 addSettlement
    async addSettlement(params){
        const result = await Settlement.create({
            u_id:params.uid,
            d_id:params.did,
            s_bank:params.sedatas.sbank,
            s_bnumber:params.sedatas.sbnumber,
            s_bankname:params.sbankname,
            s_phone:params.sphone,
            s_address:params.sedatas.saddress,
            s_fpicture:params.sedatas.sfpicture,
            s_bpicture:params.sedatas.sbpicture
        });
        return result
    }
}

//节目对象
var ProgramObj={
    //增加节目信息
    async addProgram(params){
        await Album.findOne({
            where:{
                a_name:params.pro_data.aname
            },
            raw:true
        }).then(data=>{
            console.log('data:',data.a_id)

            const result =  Program.create({
                a_id:data.a_id,
                a_name:params.pro_data.aname,
                pro_name:params.pro_data.proname,
                program:params.pro_data.p_rogram,
            });
            return result;
        })


        // const result = await Program.create({
        //     a_id:data.a_id,
        //     a_name:params.pro_data.aname,
        //     pro_name:params.pro_data.proname,
        //     program:params.pro_data.p_rogram,
        // });
        // return result;
    }
}

module.exports={
    UserObj,
    DataObj,
    AlbumObj,
    PlatformObj,
    RealnameObj,
    SettlementObj,
    InviteObj,
    ProgramObj,
}
