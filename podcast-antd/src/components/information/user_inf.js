import React,{useState,useEffect} from "react";
import {Form, Input, Button, message, Upload, Image} from 'antd';
import '../css/user_inf.css'
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import {PlusOutlined} from "@ant-design/icons";

export default function User(){

    const updateUserRef=React.createRef();

    const [user,setUser]=useState([]);
    const [code,setCode]=useState(100);
    const [picPath,setPicPath]=useState('');

    //图片上传
    const [picList, setPicList] = useState([]);

    //上传按钮
    const picChange=({fileList})=>{
        setPicList(fileList);
    }
    //图片预览
    const picPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    //格式检查
    const picUpload=(file)=>{
        const isJpgOrPng=(file.type==='image/jpeg'||file.type==='image/png');
        if (!isJpgOrPng){
            message.error('只能上传JPS或PNG格式图像');
        }
        const isLt2M=file.size/1024/1024<2;
        if (!isLt2M){
            message.error('图像不能大于2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    //上传按钮
    const uploadButton=(
        <div>
            <PlusOutlined/>
            <div style={{marginTop:8}}>Upload</div>
        </div>
    )

    const uploadImg=()=>{
        setPicPath(null)
    }

    //获取用户信息
    const getUser=()=>{
        axios.get("http://localhost:8089/api/showUser",{params:{uid:3}}).then(result=> {
            // setUser(result.data)
            console.log(result.data);
            updateUserRef.current.setFieldsValue({
                u_id: result.data.u_id,
                u_username: result.data.u_username,
                u_password: result.data.u_password,
                // u_picture:result.data.u_picture,
                u_phone: result.data.u_phone,
                u_qq: result.data.u_qq,
                u_wechat: result.data.u_wechat,
                u_email: result.data.u_email,
                u_introduce: result.data.u_introduce
            })
            setPicPath(result.data.u_picture)
        })
    }

    async function updateUser(){
        await updateUserRef.current.validateFields().then(value=>{
            // console.log(value)
            // console.log(picList[0])
            // console.log(picList[0].response.imgPath)
            let info={
                u_id:value.u_id,
                u_username:value.u_username,
                u_picture:picList[0].response.imgPath,
                u_phone:value.u_phone,
                u_qq:value.u_qq,
                u_wechat:value.u_wechat,
                u_email:value.u_email,
                u_introduce:value.u_introduce
            }
            axios.put("http://localhost:8089/api/updateUser",{user:info}).then(result=>{
                message.success(result.data.msg);
                setCode(result.data.code);
            })
        })
    }

    //当用户信息改变时
    useEffect(()=>{
        getUser();
        console.log(code)
        console.log(user)
    },[code])

    return(
        <div className="content-main">
            <div className="page">
                <div className="page-title">主播信息</div>
                <div className="page-form"  >
                    <Form ref={updateUserRef} >
                        <Form.Item
                            label={'主播名'}
                            name={'u_username'}
                            rules={[{
                                required:true,
                            }]}
                        >
                            <Input style={{border:'0'}}/>

                        </Form.Item>
                        <Form.Item
                            label={'用户UID'}
                            name={'u_id'}
                        >
                            <Input disabled={true} style={{border:'0'}}/>

                        </Form.Item>
                        <Form.Item
                            label={'头像'}
                            // name={'u_picture'}
                        >
                            <div className="upload" style={{width:"116px" , height:"130px"}}>
                                {picPath ? <Image src={picPath}/>:
                                    <ImgCrop rotate>
                                        <Upload
                                            name='u_picture'
                                            className="avatar-uploader"
                                            action="http://localhost:8089/api/upload" //上传的地址
                                            listType="picture-card"
                                            onPreview={picPreview}
                                            onChange={picChange}
                                            fileList={picList}
                                            data={(file)=>({
                                                photoContent:file
                                            })
                                            }
                                            beforeUpload={picUpload}
                                            maxCount={1}
                                        >
                                            {picList>=1?null:uploadButton}
                                        </Upload>
                                    </ImgCrop>}
                                {/*<Button onClick={uploadImg}>更换头像</Button>*/}
                                <p className="prompts" onClick={uploadImg}>更换头像</p>
                            </div>
                            <div className="msg1">大小不超过3M，仅支持png、jpg。</div>
                        </Form.Item>
                        <Form.Item
                            label={'联系电话'}
                            name={'u_phone'}
                            rules={[{
                                required:true,
                                pattern:/^1[3|5|7|8][0-9]{9}$/,
                                message:'请输入手机号'
                            }]}
                        >
                            <Input style={{border:'0'}}/>
                        </Form.Item>
                        <Form.Item
                            label={'QQ'}
                            name={'u_qq'}
                            rules={[{
                                required:true,
                                message:'请输入QQ'
                            }]}
                        >
                            <Input style={{border:'0'}}/>
                        </Form.Item>
                        <Form.Item
                            label={'微信'}
                            name={'u_wechat'}
                            rules={[{
                                required:true,
                                message:'请输入微信'
                            }]}
                        >
                            <Input style={{border:'0'}}/>
                        </Form.Item>
                        <Form.Item
                            label={'邮箱'}
                            name={'u_email'}
                        >
                            <Input style={{border:'0'}}/>
                        </Form.Item>
                        <Form.Item
                            label={'介绍'}
                            name={'u_introduce'}
                        >
                            <TextArea style={{border:'0'}}/>
                        </Form.Item>
                    </Form>
                    <Button type="primary" size="middum" onClick={updateUser} >提交</Button>
                </div>
            </div>
        </div>
    )
}
