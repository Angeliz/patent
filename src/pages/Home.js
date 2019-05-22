import React, {Component} from 'react';
import { Row, Col, Input, Card, Table, Tabs, Divider, Carousel } from 'antd';

import './Home.css'

const TabPane = Tabs.TabPane;
const Search = Input.Search;


class Home extends Component {

    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Home;
