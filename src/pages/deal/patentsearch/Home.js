import React, {Component} from 'react';
import { Breadcrumb, Row, Col,  Menu, Icon, Divider, Input, Select, Card, Avatar } from 'antd';

import chongdian from '../../../imgs/chongdian.png'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
const Option = Select.Option;
const InputGroup = Input.Group;
const { Meta } = Card;

function handleClick(e) {
    console.log('click', e);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}

class Home extends Component {



    render() {

        return (
            <div style={{width: '80%', textAlign: 'left', margin: '0 auto'}}>
                <Breadcrumb style={{margin: '20px 0',}}>
                    <Breadcrumb.Item style={{color: 'white'}}><a href="./">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <span style={{fontWeight: '600'}}>专家评估</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="card">
                            <Divider>专利分类</Divider>
                            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                      <span>人类生活必需</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="11">农业；林业；畜牧业；狩猎；诱捕；捕鱼</Menu.Item>
                                    <Menu.Item key="12">烟草；雪茄烟；纸烟；吸烟者用品</Menu.Item>
                                    <Menu.Item key="13">服装；帽类制品；鞋类</Menu.Item>
                                    <Menu.Item key="14">医学或兽医学；卫生学</Menu.Item>
                                    <Menu.Item key="15">运动；游戏；娱乐活动</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                      <span>作业；运输</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="21">一般的物理或化学的方法或装置</Menu.Item>
                                    <Menu.Item key="22">印刷；排版机；打字机；模印机〔4〕</Menu.Item>
                                    <Menu.Item key="23">一般车辆；铁路；无轨陆用车辆</Menu.Item>
                                    <Menu.Item key="24">飞行器；航空；宇宙航行</Menu.Item>
                                    <Menu.Item key="25">输送；包装；贮存；搬运薄的或细丝状材料</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                      <span>化学；冶金</span>
                                    </span>
                                    }
                                >
                                    <Menu.Item key="31">无机化学</Menu.Item>
                                    <Menu.Item key="32">水、废水、污水或污泥的处理</Menu.Item>
                                    <Menu.Item key="33">炸药；火柴</Menu.Item>
                                    <Menu.Item key="34">有机高分子化合物；其制备或化学加工；以其为基料的组合物</Menu.Item>
                                    <Menu.Item key="35">染料；涂料；抛光剂；天然树脂；黏合剂</Menu.Item>
                                    <Menu.Item key="36">生物化学；酒；醋；微生物学；酶学；突变或遗传工程</Menu.Item>
                                    <Menu.Item key="37">冶金；黑色或有色金属合金；合金或有色金属的处理</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub4"
                                    title={
                                        <span>
                                          <span>纺织；造纸</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="41">天然或人造的线或纤维；纺纱或纺丝</Menu.Item>
                                    <Menu.Item key="42">织造</Menu.Item>
                                    <Menu.Item key="43">编织；花边制作；针织；饰带；非织造布</Menu.Item>
                                    <Menu.Item key="44">缝纫；绣花；簇绒</Menu.Item>
                                    <Menu.Item key="45">织物等的处理；洗涤；其他类不包括的柔性材料</Menu.Item>
                                    <Menu.Item key="46">绳；除电缆以外的缆索</Menu.Item>
                                    <Menu.Item key="47">造纸；纤维素的生产</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub5"
                                    title={
                                        <span>
                                          <span>固定建筑物纸</span>
                                        </span>
                                    }
                                >
                                </SubMenu>
                                <SubMenu
                                    key="sub6"
                                    title={
                                        <span>
                                          <span>机械工程；照明；加热；</span>
                                        </span>
                                    }
                                >
                                </SubMenu>
                                <SubMenu
                                    key="sub7"
                                    title={
                                        <span>
                                          <span>物理</span>
                                        </span>
                                    }
                                >
                                </SubMenu>
                                <SubMenu
                                    key="sub8"
                                    title={
                                        <span>
                                          <span>电学</span>
                                        </span>
                                    }
                                >
                                </SubMenu>
                            </Menu>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="card">
                            <InputGroup compact>
                                <Select style={{width:'120px'}} defaultValue="quanbu"  onChange={handleChange}>
                                    <Option value="quanbu">全部</Option>
                                    <Option value="patentnumber">专利号</Option>
                                    <Option value="patentee">专利权人</Option>
                                </Select>
                                <Search style={{width:'80%',margin:'0 0 0 20px'}} placeholder="请输入检索词" onSearch={value => console.log(value)} enterButton />
                            </InputGroup>

                            <Row gutter={24} style={{margin:'20px 0 0 0'}}>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                            </Row>

                            <Row gutter={24} style={{margin:'20px 0 0 0'}}>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card
                                        cover={
                                            <img
                                                alt="example"
                                                src={chongdian}
                                            />
                                        }
                                        actions={[<span>评分：6.2</span>, <span>查看详情</span>]}
                                    >
                                        <Meta
                                            title="一种电池充电方法和装置"
                                            description="一种电池充电方法，该方法先获取电池参数，所述电池参数包括电池。"
                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
