import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Affix, Icon, BackTop } from 'antd';
import Head from './Head';

const { Header } = Layout;
const { SubMenu } = Menu;

export default class Wrapper extends Component {
  render() {
    const sideMenu = (
      <Menu mode="inline" inlineIndent="40">
        <SubMenu
          key="introduction"
          title={(
            <span>
              <Icon type="home" />
              <span>Introduction</span>
            </span>
)}
        >
          <Menu.Item key="preface">Preface</Menu.Item>
          <Menu.Item key="on-development">On Development</Menu.Item>
          <Menu.Item key="on-design">On Design</Menu.Item>
          <Menu.Item key="acknowledgements">Acknowledgements</Menu.Item>
        </SubMenu>
        <Menu.Item key="resume">
          <Icon type="solution" />
          Resume
        </Menu.Item>
        <SubMenu
          key="work"
          title={(
            <span>
              <Icon type="laptop" />
              <span>Work</span>
            </span>
)}
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="projects"
          title={(
            <span>
              <Icon type="experiment" />
              <span>Projects</span>
            </span>
)}
        >
          <Menu.Item key="raleigh-beach">Raleigh Beach</Menu.Item>
          <Menu.Item key="identity-project">The Identity Project</Menu.Item>
        </SubMenu>
        <SubMenu
          key="reading"
          title={(
            <span>
              <Icon type="read" />
              <span>Reading</span>
            </span>
)}
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="articles"
          title={(
            <span>
              <Icon type="form" />
              <span>Articles</span>
            </span>
)}
        >
          <Menu.Item key="shared-components-jwt">
            Shared Components with JWT Authorization
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
    const { banner } = this.props;

    return (
      <Layout
        style={{
          background: '#fff',
        }}
      >
        <Head />
        <BackTop style={{ right: '24px' }} />
        <Header
          style={{
            background: '#fff',
            padding: '0 24px 0 40px',
          }}
        >
          <div className="title" style={{ float: 'left' }}>
            timup.ch
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="blog">Blog</Menu.Item>
          </Menu>
        </Header>
        {banner}
        <Row>
          <Col xxl={4} xl={4} lg={6} md={24} sm={24} xs={24}>
            <Affix>{sideMenu}</Affix>
          </Col>
          <Col xxl={20} xl={20} lg={18} md={24} sm={24} xs={24}>
            {this.props.children}
          </Col>
        </Row>
      </Layout>
    );
  }
}
