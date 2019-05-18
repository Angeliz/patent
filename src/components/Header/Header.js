import React from 'react';
import { Layout, Menu } from 'antd';
import './Header.css'

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

function Header0() {
    return (
        <div className="Header">
            <Layout className="layout">
                <Header>
                    <div style={{height:'100px', background:'rgb(0, 0, 102)', width:'100%'}}>

                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ height: '71px',background:'rgba(31, 58, 147, 1)',lineHeight:'71px' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <span className="subMenuTitle">专利评估</span>
                                </span>
                                                }
                        >
                            <Menu.Item key="1" className="menuItem">系统评估</Menu.Item>
                            <Menu.Item key="2" className="menuItem">用户自定义评估</Menu.Item>
                            <Menu.Item key="3" className="menuItem">专家人工评估</Menu.Item>
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
                            <Menu.Item key="1" className="menuItem">系统评估</Menu.Item>
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
                            <Menu.Item key="1" className="menuItem">领域</Menu.Item>
                            <Menu.Item key="2" className="menuItem">申请人</Menu.Item>
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
                            <Menu.Item key="1" className="menuItem">专利检索平台</Menu.Item>
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
                {/*<Content style={{ padding: '0 50px' }}>*/}

                {/*</Content>*/}
                {/*<Footer style={{ textAlign: 'center', backgroundColor:'rgba(31, 58, 147, 1)', color:'white' }}>帮助 隐私 条款</Footer>*/}
            </Layout>
        </div>
    );
}

export default Header0;
