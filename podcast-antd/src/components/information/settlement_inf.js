import React,{useState} from "react";
import {Form, Select, Input, message, Cascader,Upload} from "antd";
//import Avatar from "../action/upload";
import axios from "axios";
import options from "../action/options";
import PlusOutlined from '@ant-design/icons'

export default function Settlement_inf(props){
    const addSettlementRef = React.createRef();   //创建一个ref和对话框中的表单进行绑定
    const [address1,setAddress1] = useState([])

    /*图片
    const [upload,setUpload] = useState({
        previewVisible:false,  //是否可以预览
        previewImage:'',    //被浏览图片
        previewTitle:'',    //浏览图片标题
        imgList:[],
    })*/

    //const [address2,setAddress2] = useState('')
    const onChange1 = (value) => {
        setAddress1(value)
    }
    console.log(address1)
    //console.log(document.getElementById('inp').value)
    // const onChange2= (value)=>{
    //     setAddress2(value)
    // }
    //console.log(address2)

    /*图片
    //读取文件
    const getBase64 = (file)=>{
        return new Promise((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=> resolve(reader.result);
            reader.onerror = error => reject(error)
        })
    }
    //预览图片
    const handlePreview = async (file)=>{
        if(!file.url && !file.preview){
            file.preview = await getBase64(file.originFileObj)
        }
        setUpload({
            previewImage:file.url || file.preview,
            previewVisible:true,
            previewTitle:file.name || file.url.substring(file.url.lastIndexOf('/')+1)
        })
    }
    //上传前的格式检查
    const beforeUpload = (file)=>{
        const isJpgOrPng = (file.type==='image/jpg' && file.type==='image/png');
        if(isJpgOrPng){
            message.error('只能上传JPG或PNG格式图像！')
        }
        const isLt2M = file.size /1024/1024<2;
        if(!isLt2M){
            message.error('图像不能大于2MB！');
        }
        return isJpgOrPng && isLt2M
    }
    //上传按钮
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div>Upload</div>
        </div>
    )
    const handleChange = ({fileList})=>{
        setUpload({imgList:fileList})
    }*/


    const addSe_infSubmit = async ()=>{
        //setUpload.imgList(fileList)
         await addSettlementRef.current.validateFields().then(value=>{
             const sbname = value.sbankname1.join('')+value.sbankname2 //拼接两个地址
             const phone = value.sphone1+value.sphone2
             // console.log('===========',sbname)
             // console.log('-----------',value)
             const seobj={
                 sedatas:value,
                 sbankname:sbname,
                 sphone:phone,
                 //sfpicture:upload.imgList[0].response.imgPath,
                 uid:1,
                 did:1
             }
             //console.log('123',seobj)
             axios.post('http://localhost:8089/api/addSettlement',{sett:seobj}
                // uid:101,
                // did:101,
                // sbank:'中国人民银行',
                // sbnumber:'102931847356242237',
                // sbankname:'陕西省西安市雁塔区小寨东路',
                // sphone:'15991316428',
                // saddress:'陕西西安'
            ).then(result=>{
                message.success(result.data.msg)
            })
         })
    }


    return(
        <Form ref={addSettlementRef} style={{backgroundColor:'white',borderRadius:'10px',height:800,width:'90%'}}>
            <p style={{ fontSize:'15px',fontWeight:'600',float:"left",paddingLeft:'30px',paddingTop:'30px'}}>结算信息</p>
            <br/><br/>
            <div name="settlement_inf" style={{paddingLeft:'200px',fontSize:15}}>
                <br/><br/>
                <Form.Item
                    label="银&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;行："
                    name="sbank"
                    rules={[{
                        required:true,   //表示此项为必填项
                        message:"请选择银行"
                    }]}
                >
                    <Select style={{width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left",height:'30px'}} text='请选择'>
                        <Select.Option value="中国人民银行">中国人民银行</Select.Option>
                        <Select.Option value="邮政储蓄银行">邮政储蓄银行</Select.Option>
                        <Select.Option value="中国工商银行">中国工商银行</Select.Option>
                        <Select.Option value="中国建设银行">中国建设银行</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="银行账号："
                    name="sbnumber"
                    rules={[{
                        required:true,
                        message:"请输入银行账户"
                    }]}
                >
                    <Input type={"text"} style={{width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left"}}/>
                </Form.Item>
                <Form.Item
                    label="开&nbsp;&nbsp;户&nbsp;&nbsp;行："
                    name="sbankname1"
                    rules={[{
                        required:true,
                    }]}
                >
                    <Cascader value={address1} options={options} onChange={onChange1} placeholder="选择地址" style={{float:"left",marginLeft:'0px',width: 300 }} />

                    {/*<App style={{width:'300px',backgroundColor:'#f4f5f5',border:0}}/><br/>*/}
                    {/*<Input style={{width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left"}}/>*/}
                </Form.Item>
                <Form.Item
                    name="sbankname2"
                >
                    <Input style={{marginLeft:'80px',width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left"}}/>
                </Form.Item>
                <Form.Item
                    label="银行预留手机号："
                    name="sphone1"
                    rules={[{
                        required:true,
                        message:"请输入手机号"
                    }]}
                >
                    <Select style={{height:'30px',width:'90px',backgroundColor:'#f4f5f5',border:0,float:"left",textAlign:'center'}}>
                        <Select.Option value="+86">+86</Select.Option>
                        <Select.Option value="+32">+32</Select.Option>
                        <Select.Option value="+12">+12</Select.Option>
                    </Select>
                    {/*<Input type={"text"} style={{width:'300px',backgroundColor:'#f4f5f5',border:0}}/>*/}
                </Form.Item>
                <Form.Item name="sphone2">
                    <Input style={{marginLeft:'120px',float:'left',width:'300px',backgroundColor:'#f4f5f5',border:0}}/>
                </Form.Item>
                <Form.Item
                    label="通讯地址："
                    name="saddress"
                    rules={[{
                        required:true,
                        message:"请输入通讯地址"
                    }]}
                >
                    <Input style={{height:'30px',width:'300px',backgroundColor:'#f4f5f5',border:0,float:"left"}}/>
                </Form.Item>
                <Form.Item
                    label="结算信息复印件："
                    //name="sfpicture"
                    rules={[{
                        required:true,
                        message:"请选择结算信息复印件"
                    }]}
                >
                    {/*
                        上传图片问题
                    */}
                    <Upload
                        // name="sfpicture"
                        // className="avatar-uploader"
                        // listType="picture-card"
                        // fileList={upload.imgList}
                        // onPreview={handlePreview}
                        // onChange={handleChange}
                        // action="http://localhost:8089/api/upload"
                        // data={(file)=>({
                        //     photoCotent:file
                        // })}
                        // beforeUpload={beforeUpload}
                    >
                        {/*{upload.imgList.length >=1 ? null:uploadButton}*/}
                    </Upload>
                    {/*<Avatar/>*/}
                </Form.Item>

                <p style={{float:'left',fontSize:'5px'}}>个人主播：使用A4纸复制银行卡正反面，并手写银行卡号等信息，扫描电子版上传，</p>
                <a style={{float:'left',fontSize:'5px'}}>可参考示例</a>
            </div>
            <br/><br/>
            <div>
                {/*<input type="button" />*/}
                <button onClick={addSe_infSubmit} style={{width:'100px',height:'30px',backgroundColor:'#2b9ff8',borderRadius:'3px',border:'0',color:'white'}}>确认</button>
                <button style={{marginLeft:'50px',width:'100px',height:'30px',backgroundColor:'white',borderRadius:'3px',color:'black'}}>取消</button>
            </div>
        </Form>
    )
}
