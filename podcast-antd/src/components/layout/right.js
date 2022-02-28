//首页
import '../css/right.css'
import pic from '../images/111.png'
export default function Right(){
    return(
        <div className="content-right">
            <div className="quantity" style={{width:'900px', height:'150px'}}>
                <div className="menu-item1" style={{width:"270px"}}>
                    <img src={"https://h5static.kuwo.cn/www/ugc/img/data1.994e1e4.png"} />
                    <div className="msg">
                        播放量
                    </div>
                    <div className="num" >...</div>
                    <div className="card-msg" >
                        昨日0
                    </div>
                </div>
                <div className="menu-item2" style={{width:"270px"}}>
                    <img src={"https://h5static.kuwo.cn/www/ugc/img/data2.0be9128.png"}/>
                    <div className="msg">
                        订阅数
                    </div>
                    <div className="num">...</div>
                    <div className="card-msg">
                        昨日0
                    </div>
                </div>
                <div className="menu-item3" style={{width:"270px"}}>
                    <img src={"https://h5static.kuwo.cn/www/ugc/img/data4.13ecc1b.png"}/>
                    <div className="msg">
                        完播率
                    </div>
                    <div className="num">...</div>
                    <div className="card-msg">
                        昨日0
                    </div>
                </div>
            </div>
            <div className="advertising" style={{width:'900px', height:'150px',marginTop:'20px',marginLeft:'20px'}}>
                <div>
                    <img src={pic}/>
                </div>
            </div>
            <div className="program" style={{width:'900px',height:'350px',marginTop:'20px'}}>
                <div className="box" style={{width: '420px',height: '340px'}}>
                    <div  className="title">
                        <div className="title-name">最新上传的节目</div>
                    </div>
                    <div  className="content">
                        <div  className="nodata" style={{paddingTop: '1px'}}>
                            <img
                                src={"https://h5static.kuwo.cn/www/ugc/img/nodata.c5fe324.png"}
                                style={{display: 'block', width: '200px', margin: '20px auto 0px'}}
                            />
                            <p>暂无节目信息，请上传节目!</p>
                        </div>
                    </div>
                </div>

                <div className="box" style={{width: '420px', height: '340px'}}>
                    <div className="title">
                        <div className="tab journalism-tab" style={{height: '49px',width: '100%'}}>
                            <div className="tab-content">
                                <div  className="tab-menu active">
                                    活动中心
                                </div>
                                <div className="tab-menu">
                                    重点扶持
                                </div>
                                <div className="tab-menu">
                                    重点战略
                                </div>
                                <div className="tab-menu">
                                    公告
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div  className="journalism">
                            <div className="journalism-name text-overflow">【进行中】书声计划第十四批试音活动</div>
                            <div className="journalism-date">2021-11-26</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【试音公示】书声计划第十三批试音
                            </div>
                            <div className="journalism-date">2021-11-26</div>
                        </div>
                        <div className="journalism">
                            <div
                                className="journalism-name text-overflow">【活动公示】二次元同人活动
                            </div>
                            <div className="journalism-date">2021-11-30</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【已结束】书声计划第十三批试音活动
                            </div>
                            <div className="journalism-date">2021-11-18</div>
                        </div>
                        <div  className="journalism">
                            <div className="journalism-name text-overflow">【试音公示】书声计划第十二批试音
                            </div>
                            <div className="journalism-date">2021-11-19</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【活动公示】闪光计划第三期榜单发榜
                            </div>
                            <div  className="journalism-date">2021-11-18</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【已结束】书声计划第十二批试音活动
                            </div>
                            <div className="journalism-date">2021-11-12</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【试音公示】书声计划第十一批试音
                            </div>
                            <div className="journalism-date">2021-11-12</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【已结束】书声计划第十一批试音活动
                            </div>
                            <div className="journalism-date">2021-11-02</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【进行中】懒人极速情感年终征集令
                            </div>
                            <div className="journalism-date">2021-11-05</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【试音公示】书声计划第十批试音
                            </div>
                            <div className="journalism-date">2021-11-04</div>
                        </div>
                        <div className="journalism">
                            <div className="journalism-name text-overflow">【试音公示】书声计划第七批试音
                            </div>
                            <div className="journalism-date">2021-10-09</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="academy" style={{width:'860px',height:'460px'}}>
                <div className="box" style={{width:'560px',height:'460px'}} >
                    <div className="title">
                        <div className="title-name">创作者学院</div>
                    </div>
                    <div className="content">
                        <div className="university-pic ivu-carousel" >
                            <button type="button" className="left ivu-carousel-arrow ivu-carousel-arrow-hover">
                                <i className="ivu-icon ivu-icon-ios-arrow-back"></i>
                            </button>
                            <div className="ivu-carousel-list">
                                <div className="ivu-carousel-track higher"
                                     style={{width: '500px',transform: 'translate3d(0px, 0px, 0px)',transition: 'transform 500ms ease 0s', visibility: 'visible'}}>
                                    <div className="ivu-carousel-item" style={{width: '500px',height: '100px',left: '0px'}}>
                                        <a href="." target="_blank">
                                            <img src="http://ossfile.kuwo.cn/group1/M00/00/44/CgIDC2DioHOAQbKDAAC1bwmfunk998.jpg"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="ivu-carousel-track"
                                     style={{width: '500px', transform: 'translate3d(-1px, 0px, 0px)', transition: 'transform 500ms ease 0s', position: 'absolute'}}>
                                    <div className="ivu-carousel-item"
                                         style= {{width: '500px' ,height: '100px',left: '0px'}}>
                                        <a href="." target="_blank">
                                            <img src="http://ossfile.kuwo.cn/group1/M00/00/44/CgIDC2DioHOAQbKDAAC1bwmfunk998.jpg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="right ivu-carousel-arrow ivu-carousel-arrow-hover">
                                <i className="ivu-icon ivu-icon-ios-arrow-forward"></i>
                            </button>
                            <ul className="ivu-carousel-dots ivu-carousel-dots-inside">
                                <li className="ivu-carousel-active">
                                    <button type="button"></button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab" style={{height:'49px'}}>
                            <div className="tab-content" >
                                <div className="tab-menu active">
                                    平台规则规范
                                </div>
                                <div className="tab-menu">
                                    创作者中心新手之旅
                                </div>
                                <div className="tab-menu">
                                    节目制作指引
                                </div>
                                <div className="tab-menu">
                                    后台使用指南
                                </div>
                            </div>
                        </div>
                        <div style={{maxHeight:'250px',overflowY:'auto'}} >
                            <div className="university">
                                <div className="university-name text-overflow">TME播客创作中心内容管理规范</div>
                                <div className="university-date">2021-05-31 11:58:28</div>
                            </div>
                            <div className="university">
                                <div className="university-name text-overflow">主播入驻手册（全链路操作指南）
                                </div>
                                <div className="university-date">2021-09-24 11:50:20
                                </div>
                            </div>
                            <div className="university">
                                <div className="university-name text-overflow">收益FAQ及提现必看（试运行版本）
                                </div>
                                <div className="university-date">2021-05-31 17:12:18
                                </div>
                            </div>
                            <div className="university">
                                <div className="university-name text-overflow">实名认证操作说明
                                </div>
                                <div className="university-date">2021-09-16 17:37:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box" style={{width:'280px',height:'460px'}}>
                    <div className="title">
                        <div className="title-name">热点内容</div>
                    </div>
                    <div className="content">
                        <div className="hot-main">
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img2.kuwo.cn/star/albumcover/300/54/69/589932043.jpg" src="http://img2.kuwo.cn/star/albumcover/300/54/69/589932043.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">女总裁的贴身特工</div>
                                    <div className="hot-msg">
                                        <span>幽龙随想</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img1.kuwo.cn/star/albumcover/300/90/86/1565733778.jpg" src="http://img1.kuwo.cn/star/albumcover/300/90/86/1565733778.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">锦绣农女：种田小娇妻(精品多播）
                                    </div>
                                    <div className="hot-msg">
                                        <span>阿珺</span></div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img2.kuwo.cn/star/albumcover/300/21/28/2192992966.jpg" src="http://img2.kuwo.cn/star/albumcover/300/21/28/2192992966.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">《冷帝权宠：狂傲医妃拽上天》（再现宫廷与权谋！）
                                    </div>
                                    <div className="hot-msg">
                                        <span>北斗wyf</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img4.kuwo.cn/star/albumcover/300/8/37/2584454240.jpg" src="http://img4.kuwo.cn/star/albumcover/300/8/37/2584454240.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">蛊鼠</div>
                                    <div className="hot-msg">
                                        <span>烟娘</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img1.kuwo.cn/star/albumcover/300/41/59/3463698812.jpg" src="http://img1.kuwo.cn/star/albumcover/300/41/59/3463698812.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">憋宝人 恐怖悬疑 精品双播</div>
                                    <div className="hot-msg">
                                        <span>墨语辰</span></div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img1.kuwo.cn/star/albumcover/300/10/9/3458390768.jpg" src="http://img1.kuwo.cn/star/albumcover/300/10/9/3458390768.jpg" lazy="loaded"/>
                                <div className="hot-info">
                                    <div className="hot-name">《女神的贴身狂医》精品双播</div>
                                    <div  className="hot-msg">
                                        <span>峰声</span></div>
                                </div>
                            </div>
                            <div className="hot">
                                <img alt="" className="hot-pic" data-src="http://img1.kuwo.cn/star/albumcover/300/50/86/384417330.jpg" src="http://img1.kuwo.cn/star/albumcover/300/50/86/384417330.jpg" lazy="loaded"/>
                                <div  className="hot-info">
                                    <div className="hot-name">老子是阴差</div>
                                    <div className="hot-msg">
                                        <span>开声芝麻</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}