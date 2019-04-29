import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Banner extends Component {
  render() {
    return (
      <Row
        gutter={24}
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Col xxl={4} xl={5} lg={6} md={0} sm={0} xs={0} />
        <Col xxl={8} xl={7} lg={6} md={24} sm={24} xs={24}>
          <h1>Col1</h1>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <h1>Col2</h1>
        </Col>
      </Row>
    );
  }
}
