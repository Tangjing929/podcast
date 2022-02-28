import React,{useEffect,useState} from "react";
import {Form, Input, Button, message, Select, Upload, Modal} from 'antd';
import axios from "axios";
import ImgCrop from 'antd-img-crop';
import {PlusOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import '../css/realname_inf.css'


const {Option}=Select;

export default function Realname_inf(){
    const addRealnameRef=React.createRef();

    const [code,setCode]=useState(100);
    const [isEdit,setIsEdit]=useState(true);

    //图片上传
    const [imgList1,setImgList1] = useState([]);
    const [imgList2,setImgList2]=useState([]);
    const [imgList3,setImgList3]=useState([]);

    // const [previewImage,setPreviewImage]=useState('');
    // const [previewTitle,setPreviewTitle]=useState('');
    // const [previewVisible,setPreviewVisible]=useState(false);
    // const [bounds,setBounds]=useState({left:0,top:0,bottom:0,right:0});

    // const draggableRef=React.createRef();

    // const onStart = (event, uiData) => {    //当鼠标悬停到对话框时就会变成十字架，就会触发这个方法
    //     const { clientWidth, clientHeight } = window.document.documentElement;    //通过解构赋值获取当前浏览的高度和宽度
    //     const targetReact = draggableRef.current.getBoundingClientRect();  //获取当前窗口显示的包含Modal的div
    //     setBounds ({
    //         bounds: {        //下面和正负号无关    视觉上看targetReact和uiData重合在一起
    //             left: -targetReact.left + uiData.x,          //左边界
    //             right: clientWidth - (targetReact.right + uiData.x),     //右边界   窗口/浏览器的宽度 - div的右边距 - modal的右边距
    //             top: -targetReact.top + uiData.y,      //浏览器的高度 + 窗口的y坐标
    //             bottom: clientHeight - (targetReact.bottom - uiData.y)
    //         }
    //     })
    // }

    // const getBase64=(img, callback)=> {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // }

    //上传按钮
    const handleChange1=({fileList})=>{
        setImgList1(fileList);
    }
    const handleChange2=({fileList})=>{
        setImgList2(fileList);
    }
    const handleChange3=({fileList})=>{
        setImgList3(fileList);
    }
    //图片预览
    const onPreview = async (file) => {
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

    // const onPreview=async (file)=>{
    //     if (!file.url && !file.preview){
    //         file.preview=await getBase64(file.originFileObj);
    //     }
    //     setPreviewImage(file.url||file.preview);
    //     setPreviewVisible(true);
    //     setPreviewTitle(file.name||file.url.substring(file.url.lastIndexOf('/')+1));
    // }

    //格式检查
    const beforeUpload=(file)=>{
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

    //获取实名信息
    const getRealname=()=>{
        axios.get("http://localhost:8089/api/showRealname",{params:{r_id:2}}).then(result=>{
            console.log(result.data);
            addRealnameRef.current.setFieldsValue({
                r_name:result.data.r_name,
                r_cardtype:result.data.r_cardtype,
                r_identity:result.data.r_identity,
                r_fphoto:result.data.r_fphoto,
                r_endtime:result.data.r_endtime,
            })
        })
    }

    const addRealname=async()=>{
        await addRealnameRef.current.validateFields().then(value=>{
            let info={
                r_name:value.r_name,
                r_cardtype:value.r_cardtype,
                r_identity:value.r_identity,
                r_fphoto:imgList1[0].response.imgPath,
                r_bphoto:imgList2[0].response.imgPath,
                r_hphoto:imgList3[0].response.imgPath,
                r_endtime:value.r_endtime,
            }
            console.log(info)
            axios.post("http://localhost:8089/api/addRealname",{realname:info}).then(result=>{
                message.success(result.data.msg);

            })
            setImgList1([]);
            setImgList2([]);
            setImgList3([]);
        })
    }

    const modifyOK=()=>{
        message.loading('等待提交申请...',2.5)
            .then(()=>{
                setIsEdit(false);
                message.success('已提交')
            })
    };

    //当用户信息上传后
    useEffect(()=>{
        getRealname();
        console.log()
    },[code])

    return(
        <div className="content-main">
            <div className="page">
                <div className="page-title">实名信息</div>
                <Button type="primary" size="middum"  onClick={modifyOK}>申请修改</Button>
                <div className="page-form">
                    <Form ref={addRealnameRef} >
                        <Form.Item
                            label={'真实姓名'}
                            name={'r_name'}
                            rules={[{
                                required:true,
                                message:'请输入真实姓名'
                            }]}
                        >
                            <Input style={{ border:'0' , backgroundColor:'#F7F7F7'}} disabled={isEdit}/>

                        </Form.Item>
                        <Form.Item
                            label={'证件类型'}
                            name={'r_cardtype'}
                            rules={[{
                                required:true,
                                message:'请选择证件类型'
                            }]}
                        >
                            <Select style={{ width: '410px',border:'0',backgroundColor:'#F7F7F7'}} placeholder='请选择' disabled={isEdit}>
                                <Option value={0}>身份证</Option>
                                <Option value={1}>护照</Option>
                            </Select>

                        </Form.Item>
                        <Form.Item
                            label={'证件号码'}
                            name={'r_identity'}
                            rules={[{
                                required:true,
                                message:'请输入号码'
                            }]}
                        >
                            <Input style={{ border:'0' , backgroundColor:'#F7F7F7'}} disabled={isEdit}/>
                        </Form.Item>
                        <Form.Item
                            label={'人像面照片'}
                            // name={'r_fphoto'}
                        >
                            <ImgCrop rotate>
                                <Upload
                                    name='r_fphoto'
                                    className="avatar-uploader"
                                    action="http://localhost:8089/api/upload" //上传的地址
                                    listType="picture-card"
                                    onPreview={onPreview}
                                    onChange={handleChange1}
                                    fileList={imgList1}
                                    data={(file)=>({
                                        photoContent:file
                                    })
                                    }
                                    beforeUpload={beforeUpload}
                                    maxCount={1}
                                >
                                    {imgList1.length>=1?null:<img src='https://h5static.kuwo.cn/www/ugc/img/idcard1.790be3a.jpg'/>}
                                </Upload>
                            </ImgCrop>
                            <div className="add"> </div>

                        </Form.Item>
                        <Form.Item
                            label={'国徽面照片'}
                            // name={'r_bphoto'}
                        >
                            <ImgCrop rotate>
                                <Upload
                                    name='r_bphoto'
                                    className="avatar-uploader"
                                    action="http://localhost:8089/api/upload" //上传的地址
                                    listType="picture-card"
                                    onPreview={onPreview}
                                    onChange={handleChange2}
                                    fileList={imgList2}
                                    data={(file)=>({
                                        photoContent:file
                                    })
                                    }
                                    beforeUpload={beforeUpload}
                                    maxCount={1}
                                >
                                    {imgList2.length>=1?null:<img src='https://h5static.kuwo.cn/www/ugc/img/idcard2.1d3fe07.jpg'/>}
                                </Upload>
                            </ImgCrop>
                            <div className="add"></div>
                        </Form.Item>
                        <Form.Item
                            label={'手持照片'}
                            // name={'r_hphoto'}
                        >
                            <ImgCrop rotate>
                                <Upload
                                    name='r_hphoto'
                                    className="avatar-uploader"
                                    action="http://localhost:8089/api/upload" //上传的地址
                                    listType="picture-card"
                                    onPreview={onPreview}
                                    onChange={handleChange3}
                                    fileList={imgList3}
                                    data={(file)=>({
                                        photoContent:file
                                    })
                                    }
                                    beforeUpload={beforeUpload}
                                    maxCount={1}
                                >
                                    {imgList3.length>=1?null:<img src='https://h5static.kuwo.cn/www/ugc/img/idcard3.6d1acc8.jpg'/>}
                                </Upload>
                            </ImgCrop>
                            <div className="add"> </div>
                        </Form.Item>
                        <Form.Item
                            label={'证件到期时间'}
                            name={'r_endtime'}
                            rules={[{
                                required:true,
                            }]}
                        >
                            <Select style={{ width: '350px',border:'0',backgroundColor:'#F7F7F7'}} placeholder='请选择' disabled={isEdit}>
                                <Option value={0}>永久</Option>
                                <Option value={1}>非永久</Option>
                            </Select>
                        </Form.Item>

                    </Form>
                    <Button type="primary" size="middum" disabled={isEdit} onClick={addRealname}>提交</Button>
                </div>
            </div>
        </div>
    )
}
