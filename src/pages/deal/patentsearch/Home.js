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
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
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
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
