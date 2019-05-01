import React, { Component } from 'react';
import { Row, Col } from 'antd';

import bannerImage from 'Static/illustrations/contact.svg';

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
        <Col xxl={4} xl={4} lg={6} md={0} sm={0} xs={0} />
        <Col xxl={10} xl={10} lg={9} md={24} sm={24} xs={24}>
          <div className="banner-heading">Hi, and welcome to timup.ch!</div>
          <div className="banner-subheading">
            The personal portfolio of Tim Upchurch
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={9} md={24} sm={24} xs={24}>
          <img src={bannerImage} />
        </Col>
      </Row>
    );
  }
}
