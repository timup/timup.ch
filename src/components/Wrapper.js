import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Affix } from 'antd';
import Head from './Head';

const { Header } = Layout;
const { SubMenu } = Menu;

export default class Wrapper extends Component {
  render() {
    const menuChild = (
      <Menu mode="inline" inlineIndent="40">
        <SubMenu />
      </Menu>
    );
    const {banner} = this.props;

    return (
      <Layout>
        <Head />
        <Header
          style={
            {
              // background: '#fff',
            }
          }
        />
        {banner}
        <Row>
          <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24}>
            <Affix>{menuChild}</Affix>
          </Col>
          <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
            {this.props.children}
          </Col>
        </Row>
      </Layout>
    );
  }
}
