import React, {useEffect, useState} from "react";
import {Form,Input,message,Select} from "antd";
import axios from "axios";
//import Avatar from "../action/upload";


export default function Platform_inf(props){
    const addPlatformRef = React.createRef()
    //const [disabled,setDisabled] = useState({})
    const [createForm] = Form.useForm()
    //const [searchForm] = Form.useForm()
    const addPl_infSubmit = async ()=>{
        await addPlatformRef.current.validateFields().then(value=> {
            const plobj={
                pldatas:value,
                uid:1
            }
            axios.post('http://localhost:8089/api/addPlatform',{pl:plobj}).then(result=>{
                //props.modifyCode()
                createForm.resetFields()  //清空form表单
                message.success(result.data.msg)
            })
        })
    }
    //const disform =()=>{
        //alert(1)
        //if(disabled){
            //setDisabled.resetFields()
        //}
        //document.getElementsByClassName('form2').style.display=''
        //setDisplay_name('block')
    //}

    // const outDiv = ()=>{
    //     document.getElementsByClassName('form2').style.display='none'
    // }
    // const onReact = ()=>{
    //     setDisplay_name.current.resetFields();
    // }
    return(
        <div style={{backgroundColor:'white',borderRadius:'10px',height:700,marginRight:'50px'}} >
            <Form form={createForm} name="form1" ref={addPlatformRef} style={{ width:'60%'}}>
                <p style={{ fontSize:'15px',fontWeight:'600',float:"left",paddingLeft:'30px',paddingTop:'30px'}}>站外信息</p>
                <p style={{color:'#a9adb1',float:'left',fontSize:'10px',paddingLeft:'30px',paddingTop:'30px'}}>为提供更优质服务，您可填写站外入驻信息（建议填写粉丝或播放数据最高的平台）</p>
                <br/><br/>
                <div name="platform_inf" style={{paddingLeft:'200px',fontSize:15}}>
                    <br/><br/>
                    <Form.Item
                        label="站外平台："
                        name="pname"
                        rules={[{
                            message:"请选择站外平台"
                        }]}
                    >
                        <Select style={{backgroundColor:'#f4f5f5',border:0}} text='请选择'>
                            <Select.Option value="0">请选择</Select.Option>
                            <Select.Option value="微博">微博</Select.Option>
                            <Select.Option value="喜马拉雅">喜马拉雅</Select.Option>
                            <Select.Option value="荔枝FM">荔枝FM</Select.Option>
                            <Select.Option value="蜻蜓FM">蜻蜓FM</Select.Option>
                            <Select.Option value="网易云音乐">网易云音乐</Select.Option>
                            <Select.Option value="B站">B站</Select.Option>
                            <Select.Option value="抖音">抖音</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="站外昵称："
                        name="pusername"
                        rules={[{
                            message:"请填写站外昵称"
                        }]}
                    >
                        <Input placeholder={"请填写您已选择平台的昵称"} style={{backgroundColor:'#f4f5f5',border:0}}/>
                    </Form.Item>
                    <Form.Item
                        label="粉&nbsp;&nbsp;丝&nbsp;&nbsp;数："
                        name="pfans"
                    >
                        <Input placeholder={"请填写您已选择平台的账号粉丝数"} style={{backgroundColor:'#f4f5f5',border:0}}/>
                    </Form.Item>
                    <Form.Item
                        label="总播放量："
                        name="pamount"
                    >
                        <Input placeholder={"请填写您已选择平台的账号总播放量"} style={{backgroundColor:'#f4f5f5',border:0}}/>
                    </Form.Item>
                    <Form.Item
                        label="站外链接"
                        name="plink"
                    >
                        <Input placeholder={"请填写您所选平台已发布的链接地址(个人主页/作品均可)"} style={{backgroundColor:'#f4f5f5',border:0}}/>
                    </Form.Item>
                    <Form.Item
                        label="截图证明"
                        name="ppicture"
                    >
                        {/*<Avatar/>*/}
                        <p style={{fontSize:'5px'}}>请上传您在已选择平台的用户后台页面截图，需包含账号昵称/播放量/粉丝量等数据信息。图片需为jpg、jpeg、png格式，且大小不超过5M</p>
                    </Form.Item>

                    <button type="primary" onClick={addPl_infSubmit} style={{float:'left',marginLeft:'120px',backgroundColor:'#2c8ff2',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>保存</button>
                    <button type="primary" style={{float:'left',marginLeft:'50px',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>取消</button>
                </div>
            </Form>
            {/*<Form className="form2" style={{display:"none",backgroundColor:'white',borderRadius:'10px',height:700,marginRight:'50px'}} ref={addPlatformRef}>*/}
            {/*    <div name="platform_inf" style={{paddingLeft:'200px',fontSize:15}}>*/}
            {/*        <Form.Item*/}
            {/*            label="站外平台："*/}
            {/*            name="pname"*/}
            {/*            rules={[{*/}
            {/*                message:"请选择站外平台"*/}
            {/*            }]}*/}
            {/*        >*/}
            {/*            <Select style={{width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left",height:'30px'}} text='请选择'>*/}
            {/*                <Select.Option value="0">请选择</Select.Option>*/}
            {/*                <Select.Option value="1">微博</Select.Option>*/}
            {/*                <Select.Option value="2">喜马拉雅</Select.Option>*/}
            {/*                <Select.Option value="3">荔枝FM</Select.Option>*/}
            {/*                <Select.Option value="4">蜻蜓FM</Select.Option>*/}
            {/*                <Select.Option value="5">网易云音乐</Select.Option>*/}
            {/*                <Select.Option value="6">B站</Select.Option>*/}
            {/*                <Select.Option value="7">抖音</Select.Option>*/}
            {/*            </Select>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="站外昵称："*/}
            {/*            name="pusername"*/}
            {/*            rules={[{*/}
            {/*                message:"请填写站外昵称"*/}
            {/*            }]}*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的昵称"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="粉&nbsp;&nbsp;丝&nbsp;&nbsp;数："*/}
            {/*            name="pfans"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的账号粉丝数"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="总播放量："*/}
            {/*            name="pamount"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的账号总播放量"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="站外链接"*/}
            {/*            name="plink"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您所选平台已发布的链接地址(个人主页/作品均可)"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="截图证明"*/}
            {/*            name="ppicture"*/}
            {/*        >*/}
            {/*            <Avatar/>*/}
            {/*            <p style={{fontSize:'5px'}}>请上传您在已选择平台的用户后台页面截图，需包含账号昵称/播放量/粉丝量等数据信息。图片需为jpg、jpeg、png格式，且大小不超过5M</p>*/}
            {/*        </Form.Item>*/}

            {/*        /!*<button type="primary" onClick={addPl_infSubmit} style={{float:'left',marginLeft:'120px',backgroundColor:'#2c8ff2',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>保存</button>*!/*/}
            {/*        /!*<button onClick={showDiv} type="primary" style={{float:'left',marginLeft:'50px',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>继续添加(剩余2)</button>*!/*/}
            {/*    </div>*/}
            {/*</Form>*/}
            {/*<Form className="form3" style={{display:"none",backgroundColor:'white',borderRadius:'10px',height:700,marginRight:'50px'}} ref={addPlatformRef}>*/}
            {/*    <div name="platform_inf" style={{paddingLeft:'200px',fontSize:15}}>*/}
            {/*        <br/><br/>*/}
            {/*        <Form.Item*/}
            {/*            label="站外平台："*/}
            {/*            name="pname"*/}
            {/*            rules={[{*/}
            {/*                message:"请选择站外平台"*/}
            {/*            }]}*/}
            {/*        >*/}
            {/*            <Select style={{width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left",height:'30px'}} text='请选择'>*/}
            {/*                <Select.Option value="0">请选择</Select.Option>*/}
            {/*                <Select.Option value="1">微博</Select.Option>*/}
            {/*                <Select.Option value="2">喜马拉雅</Select.Option>*/}
            {/*                <Select.Option value="3">荔枝FM</Select.Option>*/}
            {/*                <Select.Option value="4">蜻蜓FM</Select.Option>*/}
            {/*                <Select.Option value="5">网易云音乐</Select.Option>*/}
            {/*                <Select.Option value="6">B站</Select.Option>*/}
            {/*                <Select.Option value="7">抖音</Select.Option>*/}
            {/*            </Select>*/}
            {/*            <button onClick={outDiv}></button>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="站外昵称："*/}
            {/*            name="pusername"*/}
            {/*            rules={[{*/}
            {/*                message:"请填写站外昵称"*/}
            {/*            }]}*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的昵称"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="粉&nbsp;&nbsp;丝&nbsp;&nbsp;数："*/}
            {/*            name="pfans"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的账号粉丝数"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="总播放量："*/}
            {/*            name="pamount"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您已选择平台的账号总播放量"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="站外链接"*/}
            {/*            name="plink"*/}
            {/*        >*/}
            {/*            <Input placeholder={"请填写您所选平台已发布的链接地址(个人主页/作品均可)"} style={{float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
            {/*        </Form.Item>*/}
            {/*        <Form.Item*/}
            {/*            label="截图证明"*/}
            {/*            name="ppicture"*/}
            {/*        >*/}
            {/*            <Avatar/>*/}
            {/*            <p style={{fontSize:'5px'}}>请上传您在已选择平台的用户后台页面截图，需包含账号昵称/播放量/粉丝量等数据信息。图片需为jpg、jpeg、png格式，且大小不超过5M</p>*/}
            {/*        </Form.Item>*/}
            {/*    </div>*/}
            {/*</Form>*/}
            {/*<div>*/}
            {/*    <button type="primary" onClick={addPl_infSubmit} style={{float:'left',marginLeft:'120px',backgroundColor:'#2c8ff2',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>保存</button>*/}
            {/*    <button type="primary" style={{float:'left',marginLeft:'50px',border:0,height:'40px',width:'120px',borderRadius:"10%"}}>继续添加(剩余2)</button>*/}
            {/*</div>*/}

        </div>
    )
}
