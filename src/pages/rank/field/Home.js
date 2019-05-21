import React, {Component} from 'react';
import { Breadcrumb, Row, Col, Tabs, Divider } from 'antd';
import '../../../public.css'
import './Home.css'

const TabPane = Tabs.TabPane;




class Home extends Component {

    render() {
        return (
            <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
                <Breadcrumb style={{margin: '20px 0',}}>
                    <Breadcrumb.Item style={{color: 'white'}}><a href="./">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span style={{fontWeight: '600'}}>排名展示-领域</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={16}>
                    <Col span={18}>
                        <div className="card">
                            <Tabs tabPosition={'left'}>
                                <TabPane tab="A 人类生活必需" key="1">
                                    <p>A01农业；林业；畜牧业；狩猎；诱捕；捕鱼</p>
                                    <p>A21焙烤；制作或处理面团的设备；焙烤用面团〔1，8〕</p>
                                    <p>A22屠宰； 肉品处理； 家禽或鱼的加工</p>
                                    <p>A23其他类不包含的食品或食料；及其处理</p>
                                    <p>A41服装</p>
                                    <p>A42帽类制品</p>
                                    <p>A43鞋类</p>
                                    <p>A44服饰缝纫用品；珠宝</p>
                                    <p>A45手携物品或旅行品</p>
                                    <p>A46刷类制品</p>
                                    <p>A47家具；家庭用的物品或设备；咖啡磨；香料磨；一般吸尘器</p>
                                </TabPane>
                                <TabPane tab="B 作业；运输" key="2">
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab="C 化学；冶金" key="3">
                                    Content of Tab 3
                                </TabPane>
                                <TabPane tab="D 防治；造纸" key="4">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="Tab 2" key="5">
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab="Tab 3" key="6">
                                    Content of Tab 3
                                </TabPane>
                                <TabPane tab="Tab 1" key="7">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="Tab 2" key="8">
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab="Tab 3" key="9">
                                    Content of Tab 3
                                </TabPane>
                            </Tabs>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="card">
                            <Divider>热门领域</Divider>
                            <div id='field1' className="fieldOut">
                                <div className='field'>
                                    <p className="fieldText">H04 电通信技术</p>
                                </div>
                            </div>
                            <div id='field2' className="fieldOut">
                                <div className='field'>
                                    <p className="fieldText">G06 计算；推算；计数</p>
                                </div>
                            </div>
                            <div id='field3' className="fieldOut">
                                <div className='field'>
                                    <p className="fieldText">G02 水处理</p>
                                </div>
                            </div>
                            <div id='field4' className="fieldOut">
                                <div className='field'>
                                    <p className="fieldText">F41 弹药；爆破</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
