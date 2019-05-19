import React, {Component} from 'react';
import { Row, Col, Input, Card, Table } from 'antd';

const Search = Input.Search;
const { Meta } = Card;

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

const data = [
    {
        key: '1',
        number: 'CN201811539593',
        model: '模型一',
    },
    {
        key: '2',
        number: 'CN201811539593',
        model: '模型二',
    },{
        key: '3',
        number: 'CN201811539593',
        model: '模型三',
    }
];

class Home extends Component {

    render() {
        return (
            <div style={{width: '80%', margin: '0 auto',textAlign:'center'}}>
                <Search style={{width:'60%',margin:'100px auto'}} size="large" placeholder="请输入专利号" onSearch={value => console.log(value)} enterButton />
                <Row gutter={48}>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                        >
                            <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="模型一"
                                description="基本介绍：DCF是折现现金流，通过估算被评估专利在未来能够产生的收益额，然后以一定的折现率折算成现值以确定被评估专利价值的一种评估方法。"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                        >
                            <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="模型一"
                                description="基本介绍：DCF是折现现金流，通过估算被评估专利在未来能够产生的收益额，然后以一定的折现率折算成现值以确定被评估专利价值的一种评估方法。"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: '100%' }}
                        >
                            <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="模型一"
                                description="基本介绍：DCF是折现现金流，通过估算被评估专利在未来能够产生的收益额，然后以一定的折现率折算成现值以确定被评估专利价值的一种评估方法。"
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
