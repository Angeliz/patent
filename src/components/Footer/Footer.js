import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function Footer0() {
    return (
        <div>
            <Layout className="layout">
                <Footer style={{ textAlign: 'center', backgroundColor:'rgba(31, 58, 147, 1)', color:'white'}}>
                    <p>帮助 隐私 条款</p>
                    <p>copyright 2019 Patent evaluation First</p>
                </Footer>
            </Layout>
        </div>
    );
}

export default Footer0;
