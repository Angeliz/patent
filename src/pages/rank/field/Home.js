import React, {Component} from 'react';
import { Breadcrumb, Row, Col, Checkbox, Tabs, Select } from 'antd';
import '../../../public.css'

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
                                <TabPane tab="Tab 1" key="1">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="Tab 2" key="2">
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab="Tab 3" key="3">
                                    Content of Tab 3
                                </TabPane>
                                <TabPane tab="Tab 1" key="4">
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
                            <p>热门领域</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
