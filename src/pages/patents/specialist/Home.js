import React, {Component} from 'react';
import { Breadcrumb, Row, Col, Checkbox, Input, List, Button, Progress, Radio, Avatar, Tag } from 'antd';
import './Home.css'

const CheckboxGroup = Checkbox.Group;
const plainOptions1 = ['新能源', '制造业', '化工', '机械'];
const plainOptions2 = ['50及以上', '40～50', '30～40', '20～30', '10~20', '10以下'];
const plainOptions3 = ['9.5', '9.1', '8.7', '8.0','7.3','7.0','6.5'];
const plainOptions4 = ['回复快', '质量好', '专业', '态度好'];

const Search = Input.Search;

const data = [
    {
        title: '宋亦凡',
        percent:70,
    },
    {
        title: '郭亦凡',
        percent:80,
    },
    {
        title: '陈亦凡',
        percent:95,
    },
    {
        title: '王亦凡',
        percent:65,
    },
    {
        title: '刘亦凡',
        percent:73,
    },
    {
        title: '曾亦凡',
        percent:87,
    },
    {
        title: '李亦凡',
        percent:91,
    }
];

class Home extends Component {
    state = {
        checkedList1: [],
        indeterminate1: true,
        checkAll1: false,
        checkedList2: [],
        indeterminate2: true,
        checkAll2: false,
        checkedList3: [],
        indeterminate3: true,
        checkAl3l: false,
        checkedList4: [],
        indeterminate4: true,
        checkAll4: false,

        radioValue:'all'
    };

    onChange = (checkedList,model) => {
        if (model==1){
            this.setState({
                checkedList1: [...checkedList],
                indeterminate1: !!checkedList.length && checkedList.length < plainOptions1.length,
                checkAll1: checkedList.length === plainOptions1.length,
            });
        } else if (model===2){
            this.setState({
                checkedList2: [...checkedList],
                indeterminate2: !!checkedList.length && checkedList.length < plainOptions2.length,
                checkAll2: checkedList.length === plainOptions2.length,
            });
        } else if (model==3){
            this.setState({
                checkedList3: [...checkedList],
                indeterminate3: !!checkedList.length && checkedList.length < plainOptions3.length,
                checkAll3: checkedList.length === plainOptions3.length,
            });
        } else if (model==4){
            this.setState({
                checkedList4: [...checkedList],
                indeterminate4: !!checkedList.length && checkedList.length < plainOptions4.length,
                checkAll4: checkedList.length === plainOptions4.length,
            });
        }

    };

    onCheckAllChange = (e,model) => {
        if (model==1){
            this.setState({
                checkedList1: e.target.checked ? plainOptions1 : [],
                indeterminate1: false,
                checkAll1: e.target.checked,
            });
        } else if (model==2){
            this.setState({
                checkedList2: e.target.checked ? plainOptions2 : [],
                indeterminate2: false,
                checkAll2: e.target.checked,
            });
        } else if (model==3){
            this.setState({
                checkedList3: e.target.checked ? plainOptions3 : [],
                indeterminate3: false,
                checkAll3: e.target.checked,
            });
        } else if (model==4){
            this.setState({
                checkedList4: e.target.checked ? plainOptions4 : [],
                indeterminate4: false,
                checkAll4: e.target.checked,
            });
        }
    };

    handleSizeChange = e => {
        this.setState({ radioValue: e.target.value });
    };

    render() {
        const radioValue = this.state.radioValue;
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
                            <div style={{ borderBottom: '1px solid #E9E9E9',padding:'20px 0'}}>
                                <Checkbox
                                    style={{margin:'0 0 5px 0'}}
                                    indeterminate={this.state.indeterminate1}
                                    onChange={e => this.onCheckAllChange(e,1)}
                                    checked={this.state.checkAll1}
                                >
                                    <span style={{fontWeight:"700"}}>领域</span>
                                </Checkbox>
                                <br />
                                <CheckboxGroup
                                    options={plainOptions1}
                                    value={this.state.checkedList1}
                                    onChange={e=>this.onChange(e,1)}
                                />
                            </div>

                            <div style={{ borderBottom: '1px solid #E9E9E9',padding:'20px 0'}}>
                                <Checkbox
                                    style={{margin:'0 0 5px 0'}}
                                    indeterminate={this.state.indeterminate2}
                                    onChange={e=>this.onCheckAllChange(e,2)}
                                    checked={this.state.checkAll2}
                                >
                                    <span style={{fontWeight:"700"}}>评估数量</span>
                                </Checkbox>
                                <br />
                                <CheckboxGroup
                                    options={plainOptions2}
                                    value={this.state.checkedList2}
                                    onChange={e => this.onChange(e,2)}
                                />
                            </div>

                            <div style={{ borderBottom: '1px solid #E9E9E9',padding:'20px 0'}}>
                                <Checkbox
                                    style={{margin:'0 0 5px 0'}}
                                    indeterminate={this.state.indeterminate3}
                                    onChange={e => this.onCheckAllChange(e,3)}
                                    checked={this.state.checkAll3}
                                >
                                    <span style={{fontWeight:"700"}}>评分</span>
                                </Checkbox>
                                <br />
                                <CheckboxGroup
                                    options={plainOptions3}
                                    value={this.state.checkedList3}
                                    onChange={e=>this.onChange(e,3)}
                                />
                            </div>

                            <div style={{ borderBottom: '1px solid #E9E9E9',padding:'20px 0'}}>
                                <Checkbox
                                    style={{margin:'0 0 5px 0'}}
                                    indeterminate={this.state.indeterminate4}
                                    onChange={e=>this.onCheckAllChange(e,4)}
                                    checked={this.state.checkAll4}
                                >
                                    <span style={{fontWeight:"700"}}>标签</span>
                                </Checkbox>
                                <br />
                                <CheckboxGroup
                                    options={plainOptions4}
                                    value={this.state.checkedList4}
                                    onChange={e=>this.onChange(e,4)}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="card">
                            <Search placeholder="请输入检索内容" onSearch={value => console.log(value)} enterButton />

                            <div style={{margin:"20px 0 0 0 "}}>
                                <span>排序：</span>
                                <Radio.Group value={radioValue} onChange={this.handleSizeChange}>
                                    <Radio.Button value="all">综合</Radio.Button>
                                    <Radio.Button value="number">数量</Radio.Button>
                                    <Radio.Button value="score">评分</Radio.Button>
                                </Radio.Group>
                            </div>


                            <List
                                style={{margin:'10px 0 0 0'}}
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item actions={[<Button type="dashed">查看详情</Button>]}>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<div><a href="">{item.title}</a><Tag color="blue" style={{margin:'0 20px'}}>电子通讯</Tag></div>}
                                            description={<span>{item.title}是个好专家，主要研究方向为电子通讯领域，长期从事微生物代谢的分子生物学研究</span>}
                                        />

                                        <Progress width={40} type="circle" percent={item.percent} format={percent => `${percent/10} 分`} />

                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
