import React, {Component} from 'react';
import { Breadcrumb, Row, Col, Checkbox, Input, List, Button } from 'antd';
import './Specialist.css'

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['新能源', '制造业', '化工'];

const Search = Input.Search;

const data = [
    {
        title: '宋亦凡',
    },
    {
        title: '郭亦凡',
    },
    {
        title: '陈亦凡',
    },
    {
        title: '王亦凡',
    },
    {
        title: '刘亦凡',
    },
    {
        title: '曾亦凡',
    },
    {
        title: '李亦凡',
    }
];

class Specialist extends Component {
    state = {
        checkedList: [],
        indeterminate: true,
        checkAll: false,
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

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
                            <div style={{ borderBottom: '1px solid #E9E9E9'}}>
                                <Checkbox
                                    indeterminate={this.state.indeterminate}
                                    onChange={this.onCheckAllChange}
                                    checked={this.state.checkAll}
                                >
                                    领域
                                </Checkbox>
                            </div>
                            <br />
                            <CheckboxGroup
                                options={plainOptions}
                                value={this.state.checkedList}
                                onChange={this.onChange}
                            />
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className="card">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                            <List
                                style={{margin:'10px 0 0 0'}}
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item actions={[<Button type="dashed">查看详情</Button>]}>
                                        <List.Item.Meta
                                            title={<a href="">{item.title}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                        />

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

export default Specialist;
