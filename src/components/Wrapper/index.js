import React from 'react';
import { Head } from 'Components';
import { Layout, Row, Col } from 'antd';

export const Wrapper = ({ children }) => (
  <Layout>
    <Head />
    <Row>
      <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24} />
      <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
        {children}
      </Col>
    </Row>
  </Layout>
);
