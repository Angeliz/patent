import React, {Component} from 'react';
import { Row, Col, Input, Card, Table, Tabs, Divider } from 'antd';

import '../../../public.css'
import './Home.css'

const TabPane = Tabs.TabPane;
const Search = Input.Search;


class Home extends Component {

    render() {
        return (
            <div style={{width: '80%', margin: '0 auto',textAlign:'center'}}>
                <Tabs defaultActiveKey="1" style={{margin:'100px auto'}} animated={false}>
                    <TabPane tab="机构评估" key="1">
                        <Search style={{width:'60%'}} size="large" placeholder="请输入机构名称" onSearch={value => console.log(value)} enterButton />
                    </TabPane>
                    <TabPane tab="对标评估" key="2">
                        <Search style={{width:'60%'}} size="large" placeholder="请输入多个机构名称，用空格隔开，如华为 三星" onSearch={value => console.log(value)} enterButton />
                    </TabPane>
                </Tabs>
                <div className="card" style={{padding:'20px 100px 50px 100px'}}>
                    <Divider>报告模版</Divider>
                    <Row gutter={48}>
                        <Col span={8}>
                            <div  id="model1">
                                <div className="model">
                                    <p className="modelText">技术报告</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div  id="model2">
                                <div className="model">
                                    <p className="modelText">竞争报告</p>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div  id="model3">
                                <div className="model">
                                    <p className="modelText">我的报告</p>
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
