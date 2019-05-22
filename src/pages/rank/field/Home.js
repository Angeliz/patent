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
                                    <p>B01一般的物理或化学的方法或装置</p>
                                    <p>B02破碎、磨粉或粉碎；谷物碾磨的预处理</p>
                                    <p>B03  用液体或用风力摇床或风力跳汰机分离固体物料；从固体物料或流体中分离固体物料的磁 或静电分离；高压电场分离</p>
                                    <p>B04用于实现物理或化学工艺过程的离心装置或离心机</p>
                                    <p>B05一般喷射或雾化；对表面涂覆液体或其他流体的一般方法〔2〕</p>
                                    <p>B06一般机械振动的发生或传递</p>
                                    <p>B07将固体从固体中分离；分选</p>
                                    <p>B08清洁</p>
                                    <p>B09固体废物的处理；被污染土壤的再生</p>
                                    <p>B21基本上无切削的金属机械加工；金属冲压品</p>
                                    <p>B22铸造；粉末冶金</p>
                                    <p>B23机床；其他类目中不包括的金属加工</p>
                                </TabPane>
                                <TabPane tab="C 化学；冶金" key="3">
                                    Content of Tab 3
                                </TabPane>
                                <TabPane tab="D 防治；造纸" key="4">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="E 固定建筑物" key="5">
                                    Content of Tab 2
                                </TabPane>
                                <TabPane tab="F 机械工程；照明；加热" key="6">
                                    Content of Tab 3
                                </TabPane>
                                <TabPane tab="G 物理" key="7">
                                    Content of Tab 1
                                </TabPane>
                                <TabPane tab="H 电学" key="8">
                                    Content of Tab 2
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
