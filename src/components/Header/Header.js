import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

import './Header.css'
import logow from '../../imgs/logow.png'
import { Breadcrumb } from "antd/lib/breadcrumb";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

function Header0() {
    return (
        <div className="Header">
            <Layout className="layout">
                <Header>
                    <div style={{height:'100px', background:'rgb(0, 0, 102)', width:'100%', textAlign:'left'}}>
                        <Row style={{height:'100%'}}>
                            <Col span={2} style={{height:'100%'}}>
                                <img src={logow} style={{height:'100%'}} alt={'logo'} />
                            </Col>
                            <Col span={19} style={{height:'100%'}}>
                                <span style={{color:'white',lineHeight:'100px',fontFamily: "微软雅黑 Bold",fontWeight: '700', fontSize: '36px'}}>Patent evaluation First |      </span>
                                <span style={{color:'white',lineHeight:'100px',fontFamily: "微软雅黑 Bold",fontWeight: '700'}}>P E来袭  评估未来</span>
                            </Col>
                            <Col span={3} style={{height:'100%'}}>
                                <span style={{color:'white',lineHeight:'100px',fontFamily: "微软雅黑 Bold",fontWeight: '700',textAlign:'center',display:'inline-block',margin:'0 20px'}}>English</span>
                                <span style={{color:'white',lineHeight:'100px',fontFamily: "微软雅黑 Bold",fontWeight: '700',textAlign:'center'}}>周小雨</span>
                            </Col>
                        </Row>
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ height: '71px',background:'rgba(31, 58, 147, 1)',lineHeight:'71px', textAlign:'center' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <span className="subMenuTitle">专利评估</span>
                                </span>
                            }
                        >
                            <Menu.Item key="patentsSystem" className="menuItem"><a href="/patents/system">系统评估</a></Menu.Item>
                            <Menu.Item key="patentsCustom" className="menuItem"><a href="/patents/custom">用户自定义评估</a></Menu.Item>
                            <Menu.Item key="patentsSpecialist" className="menuItem"><a href="/patents/specialist">专家人工评估</a></Menu.Item>
                            <Menu.Item key="4" className="menuItem">其他商家评估</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <span className="subMenuTitle">机构评估</span>
                                </span>
                            }
                        >
                            <Menu.Item key="institutionsSystem" className="menuItem"><a href="/institutions/system">系统评估</a></Menu.Item>
                            <Menu.Item key="3" className="menuItem">专家人工评估</Menu.Item>
                            <Menu.Item key="4" className="menuItem">其他商家评估</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <span className="subMenuTitle">排名展示</span>
                                </span>
                            }
                        >
                            <Menu.Item key="rankField" className="menuItem"><a href="/rank/field">领域</a></Menu.Item>
                            <Menu.Item key="rankApplicant" className="menuItem"><a href="/rank/applicant">申请人</a></Menu.Item>
                            <Menu.Item key="3" className="menuItem">发明人</Menu.Item>
                            <Menu.Item key="4" className="menuItem">地区</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <span className="subMenuTitle">交易展示</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1" className="menuItem"><a href="/deal/patentsearch">专利检索平台</a></Menu.Item>
                            <Menu.Item key="2" className="menuItem">项目检索平台</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <span className="subMenuTitle">平台介绍</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1" className="menuItem">模型介绍</Menu.Item>
                            <Menu.Item key="2" className="menuItem">可视化介绍</Menu.Item>
                            <Menu.Item key="3" className="menuItem">专家功能介绍</Menu.Item>
                            <Menu.Item key="4" className="menuItem">商家功能介绍</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub6"
                            title={
                                <span>
                                    <span className="subMenuTitle">关于我们</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1" className="menuItem">咨询与反馈</Menu.Item>
                            <Menu.Item key="2" className="menuItem">联系我们</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
            </Layout>
        </div>
    );
}

export default Header0;
