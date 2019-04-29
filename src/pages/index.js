import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Button, Layout, Row, Col, Typography, Breadcrumb } from 'antd';

import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';

const { Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        <Wrapper banner={<Banner />}>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
              <Col span={24}>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 2800,
                  }}
                >
                  <Typography>
                    <Title>Home</Title>
                  </Typography>
                </Content>
              </Col>
            </Row>
          </Layout>
        </Wrapper>
      </>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
