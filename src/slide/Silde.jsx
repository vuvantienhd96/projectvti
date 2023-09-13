import React from 'react';
import { Card,Col, Row } from 'antd';
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '1px',
    textAlign: 'center',
    background: '#364d79',
    width: '150px'
};
const Slice = () => (
    <Row>
        <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: 'auto', backgroundColor: 'rgb(186 230 253)' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Col>
        <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: 'auto', backgroundColor: 'rgb(254 202 202)' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Col>
        <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: 'auto', backgroundColor: 'yellow' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Col>
        <Col span={6}>
            <Card title="Card title" bordered={false} style={{ width: 'auto', backgroundColor: 'gray' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Col>


    </Row>
);
export default Slice;