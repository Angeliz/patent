import React, {Component} from 'react';
import { Breadcrumb, Row, Col, Tabs, Divider } from 'antd';
import '../../../public.css'
import './Home.css'



class Home extends Component {

    render() {
        return (
            <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
                <Breadcrumb style={{margin: '25px 0',}}>
                    <Breadcrumb.Item style={{color: 'white'}}><a href="./">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span style={{fontWeight: '600'}}>排名展示-申请人</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="card">
                    <Divider>类型</Divider>
                    <Row gutter={96}>
                        <Col span={6}>
                            <div id='type1' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">全部类型</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type2' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">大学</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type3' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">企业</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type4' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">事业单位</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="card" style={{margin:'20px 0'}}>
                    <Divider>热门机构</Divider>
                    <Row gutter={96}>
                        <Col span={6}>
                            <div id='type5' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">华为</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type6' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">高通</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type7' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">国家电网</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type8' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">三星</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={96}>
                        <Col span={6}>
                            <div id='type9' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">苹果</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type10' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">武大</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type11' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">中科院</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div id='type12' className="typeOut">
                                <div className='type'>
                                    <p className="typeText">清华</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;
