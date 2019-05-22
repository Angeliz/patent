import React, {Component} from 'react';
import { Row, Col, Input, Card, Table, Select } from 'antd';

import './Home.css'
import '../../../public.css'

const Search = Input.Search;
const Option = Select.Option;
const { Meta } = Card;
const InputGroup = Input.Group;

const columns = [
    {
        title: '专利申请号/公开号',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '模型选择',
        dataIndex: 'model',
        key: 'model',
    },
    {
        title: '查看',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">查看结果</a>
            </span>
        ),
    },
];
function handleChange(value) {
    console.log(`selected ${value}`);
}

const data = [
    {
        key: '1',
        number: 'CN201811539593',
        model: '模型一',
    },
    {
        key: '2',
        number: 'CN201811539594',
        model: '模型二',
    },{
        key: '3',
        number: 'CN201811539595',
        model: '模型三',
    }
];

class Home extends Component {

    render() {
        return (
            <div style={{width: '80%', margin: '0 auto',textAlign:'center'}}>
                <InputGroup compact style={{margin:'100px auto'}}>
                    <Select style={{width:'120px'}} defaultValue="one"  onChange={handleChange} size={"large"}>
                        <Option value="one">模型一</Option>
                        <Option value="two">模型二</Option>
                        <Option value="three">模型三</Option>
                    </Select>
                    <Search size={"large"} style={{width:'80%',margin:'0 0 0 20px'}} placeholder="请输入检索词" onSearch={value => console.log(value)} enterButton />
                </InputGroup>
                <Row gutter={48}>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                            className="card"
                        >
                            <Meta
                                title={<span className="model1">模型一</span>}
                                description={<div style={{textAlign:'left',color:'#212121'}}>
                                    <p className="model1" style={{textAlign:'center'}}><span style={{margin:'0 50px 0 0'}}>1000 RMB/次</span><span>使用次数：100次</span></p>
                                    <p className="model1">DCF模型</p>
                                    <p><span className="descriptionSpan">基本介绍</span>：DCF是折现现金流，通过估算被评估专利在未来能够产生的收益额，然后以一定的折现率折算成现值以确定被评估专利价值的一种评估方法。</p>
                                    <p><span className="descriptionSpan">优势</span>：采用该模型评估专利价值时，对影响专利创造收益因素的考虑相对全面，反映的专利价值较为真实、准确，估价结果更容易被交易双方所接受。</p>
                                    <p><span className="descriptionSpan">劣势</span>：该模型的预测重在对企业的现金收支情况预测和企业在市场竞争下的风险预测，没有考虑企业管理者的决策会对企业收益产生的影响，所以该模型适用于静态的、确定的环境下专利的价值评估。</p>
                                </div>}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                            className="card"
                        >
                            <Meta
                                title={<span className="model2">模型二</span>}
                                description={<div style={{textAlign:'left',color:'#212121'}}>
                                    <p className="model2" style={{textAlign:'center'}}><span style={{margin:'0 50px 0 0'}}>2000 RMB/次</span><span>使用次数：200次</span></p>
                                    <p className="model2">综合加权法</p>
                                    <p><span className="descriptionSpan">基本介绍</span>：该模型适用于各类专利评估，不仅仅通过计算知识产权给企业带来的收益作为其评估价值，同时考虑了企业其他资产、社会因素等的共同作用。</p>
                                    <p><span className="descriptionSpan">优势</span>：可以根据当时的市场条件和具体的实施环境, 动态确定权值，最大限度减小误差；不仅可以分析国内的专利，也可以分析国外的专利；可以评估知识产权超过受保护年限后或保密性消失之后的价值。</p>
                                    <p><span className="descriptionSpan">劣势</span>：由于知识资产种类繁多、千差万别, 可比性差, 并且其受客观环境影响较大, 其效用发挥的期限、无形损耗及风险方面不确定因素较多, 运用该模型进行评估时只是考虑相关因素并依据一定的计算方法对知识产权价值所作的预测。</p>
                                </div>}
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                            className="card"
                        >
                            <Meta
                                title={<span className="model3">模型三</span>}
                                description={<div style={{textAlign:'left',color:'#212121'}}>
                                    <p className="model3" style={{textAlign:'center'}}><span style={{margin:'0 50px 0 0'}}>3000 RMB/次</span><span>使用次数：300次</span></p>
                                    <p className="model3">价值增量法</p>
                                    <p><span className="descriptionSpan">基本介绍</span>：知识产权的增加价值是指它为其所有者所带来的价值增值, 也就是拥有该专利和不拥有该专利的情况下企业价值的差额。专利的价值就是以年为单位，在专利的有效期内公开的特许经营权所带来的增加价值增量之和。</p>
                                    <p><span className="descriptionSpan">优势</span>：概念明确，易于理解；综合考虑了投资资本回报率、增长率、资金成本等因素对企业价值的影响； 该模型把利用被评估专利的企业作为市场体系中的一个经营整体来看待，有利于更真实完整地评估专利给企业创造的价值。</p>
                                    <p><span className="descriptionSpan">劣势</span>：最适于仅通过许可贸易而由他人所独占使用的专利的估价；是一种比较理想化的模型，没有考虑现实中专利侵权等情形。</p>
                                </div>}
                            />
                        </Card>
                    </Col>
                </Row>
                <Table columns={columns} dataSource={data} size="middle" style={{background:'white', margin:'50px 0 0 0'}}/>
            </div>
        );
    }
}

export default Home;
