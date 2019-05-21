import React, {Component} from 'react';
import { Row, Col, Divider, Form, Select, InputNumber, Button, Input } from 'antd';

import '../../../public.css'

const { Option } = Select;
const Search = Input.Search;
const data = [
    {
        name:'市场应用状况',
        value:'市场应用状况'
    },
    {
        name:'市场规模',
        value:'市场规模'
    },
    {
        name:'市场占有率',
        value:'市场占有率'
    },
    {
        name:'竞争对手',
        value:'竞争对手'
    },
    {
        name:'外部实施状况',
        value:'外部实施状况'
    },
    {
        name:'政策适应性',
        value:'政策适应性'
    },
    {
        name:'专利成本',
        value:'专利成本'
    },
];


class Home extends Component {

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div style={{width: '80%', margin: '0 auto'}}>
                <div className="card" style={{margin:'20px 0',padding:'40px 100px 20px 100px',textAlign:'center'}}>
                    <div style={{textAlign:'center'}}>
                        <p style={{fontWeight:'700',fontSize:'22px',color:'rgb(31, 58, 147)'}}>用户自定义评估</p>
                        <Search style={{width:'60%',margin:'50px auto'}} size="large" placeholder="请输入专利号" onSearch={value => console.log(value)} enterButton />
                    </div>

                    <Form {...formItemLayout}>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="指标选择" hasFeedback>
                                    <Select placeholder="请选择经济指标">
                                        {
                                            data.map((item)=><Option value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="指标权重">
                                    <InputNumber min={1} max={100} />
                                    <span className="ant-form-text">%</span>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="指标选择" hasFeedback>
                                    <Select placeholder="请选择经济指标">
                                        {
                                            data.map((item)=><Option value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="指标权重">
                                    <InputNumber min={1} max={100} />
                                    <span className="ant-form-text">%</span>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="指标选择" hasFeedback>
                                    <Select placeholder="请选择经济指标">
                                        {
                                            data.map((item)=><Option value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="指标权重">
                                    <InputNumber min={1} max={100} />
                                    <span className="ant-form-text">%</span>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="指标选择" hasFeedback>
                                    <Select placeholder="请选择经济指标">
                                        {
                                            data.map((item)=><Option value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="指标权重">
                                    <InputNumber min={1} max={100} />
                                    <span className="ant-form-text">%</span>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="指标选择" hasFeedback>
                                    <Select placeholder="请选择经济指标">
                                        {
                                            data.map((item)=><Option value={item.value}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="指标权重">
                                    <InputNumber min={1} max={100} />
                                    <span className="ant-form-text">%</span>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                            <Button type="primary" htmlType="submit" >
                                评估
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        );
    }
}

export default Home;
