import {Layout, Menu, Breadcrumb, Button,Progress,Avatar,Image} from "antd";
import {PieChartOutlined,InfoCircleOutlined,HomeOutlined,AppstoreOutlined,HddOutlined,DiffOutlined,UserOutlined} from "@ant-design/icons";
import {NavLink,Route,BrowserRouter,Routes} from "react-router-dom";
import '../css/layout_demo.css'
//import Podcast from "./podcast";
import User_inf from '../information/user_inf';
import Right from './right';
import Realname_inf from "../information/realname_inf";
import Total_data from "../data/total_data";
import UploadAlbum from "../content/uploadAlbum";
import CreateAlbum from "../content/createAlbum";
import ManageAlbum from '../content/manageAlbum';
import Settlement_inf from "../information/settlement_inf";
import Platform_inf from "../information/platform_inf";
import Album_data from "../data/album_data";
import Income_data from "../data/income_data";
import Invite_data from "../data/invite_data";

import {Footer} from "antd/es/layout/layout";

const {Header,Sider,Content} = Layout;
const {SubMenu} = Menu;


function Layout_demo(){
    return(
        <BrowserRouter>
            <Layout>
                <Header className={"header"} style={{backgroundColor:'white'}}>
                    <div className={"logo"} />
                    <div style={{float:'left',marginLeft:'10px'}} >
                        <h1 style={{color:'black',fontSize:'20px'}}>播客创作中心</h1>
                    </div>
                    <div style={{float:'right'}}>
                        {/*<h1 style={{color:'white',fontSize:'20px'}}>当前用户：{sessionStorage.getItem('userName')}</h1>*/}
                        <h1 style={{color:'black',fontSize:'20px'}}>欢迎您！唐静</h1>
                    </div>
                </Header>
                <br/>
                <Button icon={<UserOutlined/>} style={{borderRadius:'10px',marginLeft:'100px',backgroundColor:'#6d9eeb',fontSize:'20px',border:'none',width:'200px',height:'50px'}}>实名认证</Button>
                <Layout>
                    {/*<div style={{marginLeft:'50px',backgroundColor:'white',width:'100px',height:'5px',margin:'10px'}}>*/}
                    {/*<button icon={<UserOutlined/>} style={{backgroundColor:'blue',fontSize:'20px',border:'none',width:'100px',height:'50px'}}>实名认证</button>*/}
                    {/*</div>*/}

                    <Sider width={200} className={"site-layout-content"} style={{borderRadius:'8px',height:'600px',top:10,marginLeft:'100px',backgroundColor:'white'}}>
                        <div style={{marginTop:"30px",width:"60px",height:"60px",borderRadius:"50%",border:'2px solid black',margin:'0 auto'}}></div>
                        <p style={{fontWeight:'600',marginTop:"10px"}}>六元</p>
                        <Menu
                            mode={"inline"}
                            defaultSelectedKeys={["0"]}
                            defaultOpenKeys={['sub1']}
                            style={{height:'100%',borderRight:0,borderRadius:'10px',fontWeight:'600'}}
                        >
                            {/*<button style={{ borderRadius:'360px'}}></button><br/>*/}
                            <SubMenu key={'sub1'} icon={<HomeOutlined />} title={"首页"}>
                                <NavLink to={'/'} style={{fontWeight:'400'}}>首页</NavLink>
                            </SubMenu>
                            <SubMenu key={"sub2"} icon={<InfoCircleOutlined />} title={"信息"}>
                                <Menu.Item key={"1"}>
                                    <NavLink to={'/user_inf'} style={{fontWeight:'400'}}>主播信息</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"2"}>
                                    <NavLink to={'/realname_inf'} style={{fontWeight:'400'}}>实名信息</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"3"}>
                                    <NavLink to={'/settlement_inf'} style={{fontWeight:'400'}}>结算信息</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"4"}>
                                    <NavLink to={'/platform_inf'} style={{fontWeight:'400'}}>站外信息</NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key={"sub3"} icon={<DiffOutlined />} title={"内容管理"}>
                                <Menu.Item key={"5"}>
                                    <NavLink to={'/uploadAlbum'} style={{fontWeight:'400'}}>上传节目</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"6"}>
                                    <NavLink to={'/createAlbum'} style={{fontWeight:'400'}}>创建专辑</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"7"}>
                                    <NavLink to={'/mangeAlbum'} style={{fontWeight:'400'}}>专辑管理</NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key={"sub4"} icon={<PieChartOutlined />} title={"数据"}>
                                <Menu.Item key={"8"}>
                                    <NavLink to={'total_data'} style={{fontWeight:'400'}}>总体概览</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"9"}>
                                    <NavLink to={'/album_data'} style={{fontWeight:'400'}}>专辑数据</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"10"}>
                                    <NavLink to={'#'} style={{fontWeight:'400'}}>节目数据</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"11"}>
                                    <NavLink to={'/income_data'} style={{fontWeight:'400'}}>收入数据</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"12"}>
                                    <NavLink to={'/invite_data'} style={{fontWeight:'400'}}>邀请数据</NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key={'sub5'} icon={<HddOutlined />} title={"合同"}></SubMenu>
                            <SubMenu key={"sub6"} icon={<AppstoreOutlined />} title={"MCN管理"}>
                                <Menu.Item key={"13"}>
                                    <NavLink to={'#'} style={{fontWeight:'400'}}>待处理</NavLink>
                                </Menu.Item>
                                <Menu.Item key={"14"}>
                                    <NavLink to={'#'} style={{fontWeight:'400'}}>我的MCN</NavLink>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding:'0 24px 24px'}}>
                        <Breadcrumb style={{margin:'0',textAlign:'left'}}>
                        </Breadcrumb>
                        <Content
                            className={"site-layout-background"}
                            style={{padding:24,margin:0,minHeight:400,color:'black'}}
                        >
                            {/*<Route path={'/settlement_inf'} render={()=>{*/}
                            {/*    return(*/}
                            {/*        <Settlement_inf />*/}
                            {/*    )*/}
                            {/*}}></Route>*/}
                            <Routes>
                                <Route path={'/'} element={ <Right/> }></Route>
                                <Route path={'/user_inf'} element={ <User_inf/>} ></Route>
                                <Route path={'/realname_inf'} element={ <Realname_inf/>} ></Route>
                                <Route path={'/settlement_inf'} element={ <Settlement_inf/> }></Route>
                                <Route path={'/platform_inf'} element={ <Platform_inf/> }></Route>
                                <Route path={'/uploadAlbum'} element={ <UploadAlbum/> }></Route>
                                <Route path={'/mangeAlbum'} element={ <ManageAlbum/> }></Route>
                                <Route path={'total_data'} element={ <Total_data/> }></Route>
                                <Route path={'/income_data'} element={ <Income_data/> }></Route>
                                <Route path={'/invite_data'} element={ <Invite_data/> }></Route>
                                <Route path={'/createAlbum'} element={ <CreateAlbum/> }></Route>
                                <Route path={'/album_data'} element={ <Album_data/> }></Route>


                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    <div className="layout-footer-center ivu-layout-footer"
                         style={{textAlign:'center',background:'#F7F7F7',width:'1200px' }}>
                        <div className="right" style={{width:'100%'}}>
                            <span className="site">关于酷我音乐</span>
                            <span> | </span> <span className="site" data-v-92de05c6="">服务协议</span>
                            <span> | </span> <span className="site" data-v-92de05c6="">版权声明</span>
                            <span> | </span> <span className="site" data-v-92de05c6="">联系我们</span>
                            <span> | </span> <span>Copright 2014-2020 kuwo.cn All Rights Reserved.</span>
                        </div>
                    </div>
                </Footer>
            </Layout>
        </BrowserRouter>
    )
}
export default Layout_demo
