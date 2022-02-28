import React, {createRef, useState} from "react";
import {Form, Input, Row, Col, Button, Checkbox, Select, Radio, CheckboxProps, Upload, message, Modal} from "antd";
import '../css/createAlbum.css';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "axios";
import moment from "moment";
// import UploadPicture from "./UploadPicture";
import ImgCrop from "antd-img-crop"; //日期

const {Option} = Select;   //选择控件

const classifyData=['儿童','有声小说','畅销书','教育','相声评书']
const labelData1={
    儿童:['国学经典','英语启蒙','儿童歌谣','卡通动画','轻松哄睡'],
    有声小说:['玄幻奇幻','现代言情','穿越架空','青春校园','历史军事'],
    畅销书:['畅销小说','文学名著','历史','人文社科','享受生活'],
    教育:['健康养生','个人成长','学科教育'],
    相声评书:['郭德纲','相声名家']
}
const labelData2={
    国学经典:['英文','中文','启蒙教育'],
    英语启蒙:['英文','中文','启蒙教育'],
    儿童歌谣:['英文','中文','启蒙教育'],
    卡通动画:['英文','中文','启蒙教育'],
    轻松哄睡:['英文','中文','启蒙教育'],
    玄幻奇幻:['热血','穿越','重生'],
    现代言情:['青春','娱乐圈','总裁'],
    穿越架空:['权谋','虐恋','搞笑'],
    青春校园:['男频','女频','完本','连载','校园'],
    历史军事:['男频','女频','完本','连载','传奇','权谋'],
    畅销小说:['影视','悬疑','官场'],
    文学名著:['国学','名著','散文诗歌'],
    历史:['完本','连载','付费'],
    人文社科:['完本','连载','文化','古籍'],
    享受生活:['付费','免费','两性','保健'],
    健康养生:['健康','养生'],
    个人成长:['故事','成长'],
    学科教育:['历史','政治'],
    郭德纲:['相声','脱口秀'],
    相声名家:['侯宝林','马三立','张寿臣'],
}


function CreateAlbum(){
    //选择控件
    const [cla,setCla] = useState(classifyData[0])
    const [label1, setLabel1] = useState(labelData1[classifyData[0]]);   //儿童对应的分类
    const [label2, setLabel2] = useState(labelData1[classifyData[0]][0]);     //儿童的分类的第一个---国学经典
    const [label3, setLabel3] = useState(labelData2[labelData1[classifyData[0]][0]])  //国学经典对应的分类
    const [label4, setLabel4] = useState(labelData2[labelData1[classifyData[0]][0]][0])  //国学经典的第一个---英文

    const handleClassifyChange = value => {
        setCla(value)
        setLabel1(labelData1[value]);   //第二个框框对应的所有内容
        setLabel2(labelData1[value][0]); //第二个框框显示的内容---国学经典
        setLabel3(labelData2[labelData1[value][0]])   //第三个框对应的所有内容
        setLabel4(labelData2[labelData1[value][0]][0]);   //第三个框框显示的内容
    };

    const onLabel2Change = value => {
        setLabel2(value);
        setLabel3(labelData2[value]) //第二个选择框改变内容时，设置第三个框的内容
        setLabel4(labelData2[value][0])
    };
    const onLabel4Change = value => {
        setLabel4(value)     //第三个选择框改变内容时，设置第三个框显示的内容
    }

    //---------------------------连载状态单选按钮
    const [radio1,setRadio1] = useState(0)
    const onChange1 = e => {
        console.log('radio1',e.target.value)
        setRadio1(e.target.value)
    }
    //---------------------------排序方式单选按钮
    const [radio2,setRadio2] = useState(0)
    const onChange2 = e => {
        console.log('radio2',e.target.value)
        setRadio2(e.target.value)
    }
    //------------------------------首发按钮
    const [radio3,setRadio3] = useState(0)
    const onChange3 = e => {
        console.log('radio3',e.target.value)
        setRadio3(e.target.value)
    }
    //---------------------------------贴片广告
    const [radio4,setRadio4] = useState(0)
    const onChange4 = e => {
        console.log('radio4',e.target.value)
        setRadio4(e.target.value)
    }

    // //-----------------------------上传图片
    const [upload, setUpload] = useState({
        previewVisible: false,   //是否可以浏览
        previewImage: '',    //被浏览图片
        previewTitle: '',   //浏览图片标题
        imgList: [],      //图片文件列表
        bounds: {left: 0, top: 0, bottom: 0, right: 0}    //可拖拽模块的移动范围
    })

    //上传按钮
    const handleChange = ({fileList}) => {
        setUpload({
            imgList: fileList      //图片文件列表
        })
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

    //上传前格式检查
    const beforeUpload = (file) => {    //上传前格式的检查
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('只能上传JPG或PNG格式图像!')
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图像不能大于2MB!');
        }
        return isJpgOrPng && isLt2M;
    }


    //关闭预览窗口
    const handleCancel = () => {
        setUpload({
            previewVisible: false
        });
    }

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );


    console.log('=========img===================',upload.imgList)  //能获取

    //专辑信息添加成功后清空表单
    const onReset = () =>{
        addAlbumRef.current.resetFields()
    }
    //-----------------------添加专辑信息到数据库
    const addAlbumRef=createRef();   //用于绑定表单
    const addAlbum=async ()=>{
        await addAlbumRef.current.validateFields().then(value=>{
            let dataObj={
                datas:value,
                auid:1,
                adid:1,
                apicture:upload.imgList[0].response.imgPath,
                aclassify:cla,
                alabel1:label2,
                alabel2:label4,
                astate:radio1,
                atime:new Date(),
                asort:radio2,
                astarting:radio3,
                aposter:radio4,
                amanage:2
            }
            axios.post('http://localhost:8089/api/addAlbum',{datas:dataObj}).then(result=>{
                console.log('---------------:','成功')
                message.success(result.data.msg)
                onReset()
            })
        })
    }

    return (
        <>
            <div className={'contentbox'} style={{height:'1250px',width:'85%'}}>
                <div style={{width:'700px',float:'left'}}>
                    {/*<p >创建专辑</p>*/}
                    <p style={{fontSize:'16px',fontWeight:'600',textAlign:'left'}}>创建专辑</p>
                    <Form
                        ref={addAlbumRef}
                        name="basic"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20}}
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{float:'left',width:'100%'}}
                    >
                        <Form.Item
                            label={'专辑名称'}
                            name={'aname'}
                            rules={[{
                                required:true,
                                message:'用户名不能为空'
                            }]}
                        >
                            <Input placeholder={'请输入专辑名称'} style={{width:'100%'}}/>
                        </Form.Item>
                        <Form.Item
                            label={'专辑介绍'}
                            name={'aintroduce'}
                            rules={[{
                                required:true,
                                message:'专辑介绍不能为空'
                            }]}
                        >
                            <textarea style={{float:'left',width:'100%'}} placeholder={'请填写专辑简介'}></textarea>
                        </Form.Item>
                        <Form.Item
                            label={'一句话简介'}
                            name={'abrief'}
                            // rules={[{
                            //     required:true,
                            //     message:'简介不能为空'
                            // }]}
                            style={{marginBottom:'0'}}
                        >
                            <Input  placeholder={'请输入简介'}/>
                        </Form.Item>
                        <span className={'createWords'}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;填写一句话简介，利于运营人员更快的了解专辑内容，帮你做专辑推荐。</span>
                        <Form.Item
                            label={'分类'}
                            name={'aclassify'}
                            // rules={[{
                            //     required:true,
                            //     message:'用户名不能为空'
                            // }]}
                        >
                            <Select style={{ width: 120 }} defaultValue={classifyData[0]} value={cla} onChange={handleClassifyChange}>
                                {classifyData.map(classify => (
                                    <Option value={classify}>{classify}</Option>
                                ))}
                            </Select>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label>标签：</label>
                            <Select style={{ width: 120 }} value={label2} onChange={onLabel2Change}>
                                {label1.map(lab1 => (
                                    <Option key={lab1}>{lab1}</Option>
                                ))}
                            </Select>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select  style={{ width: 120 }} value={label4} onChange={onLabel4Change}>
                                {label3.map(lab2 => (
                                    <Option key={lab2}>{lab2}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label={'原作者'}
                            name={'aauthor'}
                        >
                            <Input placeholder={'选填项'}/>
                        </Form.Item>
                        <Form.Item
                            label={'连载状态'}
                            name={'astate'}
                        >
                            <Radio.Group  options={[{label:'连载',value:0},{label:'完结',value:1}]} value={radio1} onChange={onChange1} optionType="button" size={'large'} buttonStyle="solid" defaultValue={0} className={'radio'}/>
                        </Form.Item>
                        <Form.Item
                            label={'总集数'}
                            name={'asum'}
                        >
                            <Input placeholder={'选填项'}/>
                        </Form.Item>
                        <Form.Item
                            label={'排序方式'}
                            name={'asort'}
                        >
                            <Radio.Group onChange={onChange2} value={radio2} defaultValue={0} className={'sort'}>
                                <Radio value={0}>正序<span className={'createWords'}>(最新上传的节目排在最下方，有声书类建议使用正序)</span></Radio>
                                <br/><br/>
                                <Radio value={1}>倒序<span className={'createWords'}>(最新上传的节目排在最上方，娱乐类电台建议使用倒序)</span></Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label={'节目配乐'}
                            name={'asong'}
                        >
                            <Select name={'asong'} placeholder={'选填项'} style={{width:'40%',textAlign:'left',float:'left'}}>
                                <Option key={'BGM'}>BGM</Option>
                                <Option key={'插曲'}>插曲</Option>
                                <Option key={'音效'}>音效</Option>
                                <Option key={'其他'}>其他</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label={'音乐名称'}
                            name={'asongname'}
                        >
                            <Input style={{width:'40%',float:'left'}} />
                        </Form.Item>
                        <Form.Item
                            label={'是否首发'}
                            name={'astarting'}
                        >
                            <Radio.Group options={[{label:'首发',value:0},{label:'非首发',value:1}]} value={radio3} onChange={onChange3} optionType="button"  size={'large'} buttonStyle="solid" defaultValue={0} className={'radio'}/>
                            <br/><br/>
                            <p className={'createWords'}>在本平台发布专辑24小时后才可在其他平台发布</p>
                        </Form.Item>
                        <Form.Item
                            label={'贴片广告'}
                            name={'aposter'}
                        >
                            <Radio.Group options={[{label:'开启',value:0},{label:'关闭',value:1}]} value={radio4} onChange={onChange4} optionType="button"  size={'large'} buttonStyle="solid" defaultValue={0} className={'radio'}/>
                            <br/><br/>
                            <div style={{width:'900px'}}>
                                <p className={'createWords'} style={{float:"left"}}>请阅读下方《广告创收服务协议》，并选择是否开启贴片广告，开启后将同步授权TME旗下Q音、酷狗、酷我、懒人等</p>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type={'primary'} size={'large'} style={{borderRadius:'5px',marginLeft:'80px'}} className={'createAlbum-width'} onClick={addAlbum}>创作专辑</Button>&nbsp;&nbsp;&nbsp;
                            <Button type={'default'} size={'large'} style={{borderRadius:'5px'}} className={'createAlbum-width'}>取消</Button>
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('请阅读勾选产权协议！')),
                                },
                            ]}
                        >
                            <Checkbox style={{width:'500px',marginLeft:'100px'}}>
                                我已同意并阅读<a href="https://mp.kuwo.cn/propertyRight.pdf">《知识产权保护及声明》</a><a href={"https://mp.kuwo.cn/advertisement.pdf"}>《广告创收服务协议》</a>
                            </Checkbox>
                        </Form.Item>
                    </Form>
                </div>
                <div className={'picture'} >
                    {/*<UploadPicture setImg={setImg}/>*/}
                    <ImgCrop rotate>
                        <Upload
                            name="activeImg"
                            className="avatar-uploader"
                            listType="picture-card"
                            accept="image/jpg,image/jpeg,image/png,image/bmp"
                            fileList={ upload.imgList }
                            onPreview={onPreview}
                            onChange={handleChange}
                            action={"http://localhost:8089/api/upload"}
                            data={(file)=>({
                                photoContent:file
                            })}
                            beforeUpload={beforeUpload}
                            maxCount={1}
                        >
                            {upload.imgList.length >= 1 ? null : uploadButton}
                        </Upload>
                    </ImgCrop>
                    <Modal
                        visible={upload.previewVisible}
                        title={upload.previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                        okText={'提交'}
                        cancelText={'取消'}
                    >
                        <img alt="example" style={{width: '100%'}} src={upload.previewImage}/>
                    </Modal>
                </div>
            </div>
        </>
    )
}
export default CreateAlbum;