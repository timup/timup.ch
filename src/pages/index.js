/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Button, Layout, Row, Col, Typography, Breadcrumb } from 'antd';

import developmentImage from 'Static/illustrations/contact.svg';
import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';
import Head from '../components/Head';

const { Footer, Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100%',
          minHeight: '100vh',
          background: '#fff',
          paddingTop: '96px',
          paddingBottom: '96px',
          overflow: 'auto',
        }}
      >
        <Head />
        <h1>Tim Upchurch</h1>
        <p>
          <em>On the internet!</em>
        </p>
        <p><a href="resume.pdf">View resume</a></p>
      </Layout>

      // <>
      //   <Wrapper banner={<Banner />}>
      //     <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
      //       <Breadcrumb style={{ margin: '16px 0' }}>
      //         <Breadcrumb.Item>Home</Breadcrumb.Item>
      //       </Breadcrumb>
      //       <Row>
      //         <Col span={24}>
      //           <Content
      //             style={{
      //               background: '#fff',
      //               // padding: 24,
      //               margin: 0,
      //             }}
      //           >
      //             <Typography>
      //               <Title>Home</Title>
      //               <Paragraph>
      //                 Occaecat reprehenderit eu sunt ea minim ut sunt quis
      //                 exercitation ea. Incididunt non nulla deserunt voluptate.
      //                 Laborum culpa ipsum in ipsum deserunt culpa velit. Culpa
      //                 aliquip eiusmod amet elit eu esse qui anim enim sint nulla
      //                 quis enim ex. Occaecat commodo aute occaecat deserunt
      //                 consequat id minim magna in. Ullamco occaecat tempor
      //                 occaecat sunt labore Lorem esse eu consectetur. Esse
      //                 adipisicing Lorem culpa labore dolor.
      //               </Paragraph>
      //               <Paragraph>
      //                 Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //                 Irure minim magna duis officia velit mollit ut velit
      //                 commodo. Exercitation deserunt eiusmod sunt labore id
      //                 cillum ullamco magna eu laborum. Est fugiat adipisicing
      //                 pariatur nisi aliqua. Pariatur anim officia pariatur quis
      //                 proident laborum. Eiusmod dolore consectetur qui in
      //                 proident sit cillum nostrud in labore. Deserunt
      //                 reprehenderit deserunt laboris voluptate eiusmod ipsum
      //                 exercitation aliquip consectetur adipisicing culpa
      //                 deserunt quis minim.
      //               </Paragraph>
      //               <Title level={2}>Introduction</Title>
      //               <Paragraph>
      //                 Occaecat reprehenderit eu sunt ea minim ut sunt quis
      //                 exercitation ea. Incididunt non nulla deserunt voluptate.
      //                 Laborum culpa ipsum in ipsum deserunt culpa velit. Culpa
      //                 aliquip eiusmod amet elit eu esse qui anim enim sint nulla
      //                 quis enim ex. Occaecat commodo aute occaecat deserunt
      //                 consequat id minim magna in. Ullamco occaecat tempor
      //                 occaecat sunt labore Lorem esse eu consectetur. Esse
      //                 adipisicing Lorem culpa labore dolor.
      //               </Paragraph>
      //               <Paragraph>
      //                 Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //                 Irure minim magna duis officia velit mollit ut velit
      //                 commodo. Exercitation deserunt eiusmod sunt labore id
      //                 cillum ullamco magna eu laborum. Est fugiat adipisicing
      //                 pariatur nisi aliqua. Pariatur anim officia pariatur quis
      //                 proident laborum. Eiusmod dolore consectetur qui in
      //                 proident sit cillum nostrud in labore. Deserunt
      //                 reprehenderit deserunt laboris voluptate eiusmod ipsum
      //                 exercitation aliquip consectetur adipisicing culpa
      //                 deserunt quis minim.
      //               </Paragraph>
      //               <Row gutter={24}>
      //                 <Col span={12}>
      //                   <Title level={2}>On Development</Title>
      //                   <Paragraph>
      //                     Ea sint qui ut ad excepteur duis voluptate
      //                     reprehenderit. Irure minim magna duis officia velit
      //                     mollit ut velit commodo. Exercitation deserunt eiusmod
      //                     sunt labore id cillum ullamco magna eu laborum. Est
      //                     fugiat adipisicing pariatur nisi aliqua. Pariatur anim
      //                     officia pariatur quis proident laborum. Eiusmod dolore
      //                     consectetur qui in proident sit cillum nostrud in
      //                     labore. Deserunt reprehenderit deserunt laboris
      //                     voluptate eiusmod ipsum exercitation aliquip
      //                     consectetur adipisicing culpa deserunt quis minim.
      //                   </Paragraph>
      //                 </Col>
      //                 <Col span={12}>
      //                   <Title level={2}>On Development</Title>
      //                   <Paragraph>
      //                     Ea sint qui ut ad excepteur duis voluptate
      //                     reprehenderit. Irure minim magna duis officia velit
      //                     mollit ut velit commodo. Exercitation deserunt eiusmod
      //                     sunt labore id cillum ullamco magna eu laborum. Est
      //                     fugiat adipisicing pariatur nisi aliqua. Pariatur anim
      //                     officia pariatur quis proident laborum. Eiusmod dolore
      //                     consectetur qui in proident sit cillum nostrud in
      //                     labore. Deserunt reprehenderit deserunt laboris
      //                     voluptate eiusmod ipsum exercitation aliquip
      //                     consectetur adipisicing culpa deserunt quis minim.
      //                   </Paragraph>
      //                 </Col>
      //               </Row>
      //               <Title level={1}>Another Title</Title>
      //               <Paragraph>
      //                 Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //                 Irure minim magna duis officia velit mollit ut velit
      //                 commodo. Exercitation deserunt eiusmod sunt labore id
      //                 cillum ullamco magna eu laborum. Est fugiat adipisicing
      //                 pariatur nisi aliqua. Pariatur anim officia pariatur quis
      //                 proident laborum. Eiusmod dolore consectetur qui in
      //                 proident sit cillum nostrud in labore. Deserunt
      //                 reprehenderit deserunt laboris voluptate eiusmod ipsum
      //                 exercitation aliquip consectetur adipisicing culpa
      //                 deserunt quis minim.
      //               </Paragraph>
      //               <Paragraph>
      //                 Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //                 Irure minim magna duis officia velit mollit ut velit
      //                 commodo. Exercitation deserunt eiusmod sunt labore id
      //                 cillum ullamco magna eu laborum. Est fugiat adipisicing
      //                 pariatur nisi aliqua. Pariatur anim officia pariatur quis
      //                 proident laborum. Eiusmod dolore consectetur qui in
      //                 proident sit cillum nostrud in labore. Deserunt
      //                 reprehenderit deserunt laboris voluptate eiusmod ipsum
      //                 exercitation aliquip consectetur adipisicing culpa
      //                 deserunt quis minim.
      //               </Paragraph>
      //               <Title level={2}>On Development</Title>
      //               <Paragraph>
      //                 Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //                 Irure minim magna duis officia velit mollit ut velit
      //                 commodo. Exercitation deserunt eiusmod sunt labore id
      //                 cillum ullamco magna eu laborum. Est fugiat adipisicing
      //                 pariatur nisi aliqua. Pariatur anim officia pariatur quis
      //                 proident laborum. Eiusmod dolore consectetur qui in
      //                 proident sit cillum nostrud in labore. Deserunt
      //                 reprehenderit deserunt laboris voluptate eiusmod ipsum
      //                 exercitation aliquip consectetur adipisicing culpa
      //                 deserunt quis minim.
      //               </Paragraph>
      //             </Typography>
      //           </Content>
      //         </Col>
      //       </Row>
      //       <Row gutter={24}>
      //         <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
      //           <Content />
      //           <Typography>
      //             <Title level={2}>On Development</Title>
      //             <Paragraph>
      //               Ea sint qui ut ad excepteur duis voluptate reprehenderit.
      //               Irure minim magna duis officia velit mollit ut velit
      //               commodo. Exercitation deserunt eiusmod sunt labore id cillum
      //               ullamco magna eu laborum. Est fugiat adipisicing pariatur
      //               nisi aliqua. Pariatur anim officia pariatur quis proident
      //               laborum. Eiusmod dolore consectetur qui in proident sit
      //               cillum nostrud in labore. Deserunt reprehenderit deserunt
      //               laboris voluptate eiusmod ipsum exercitation aliquip
      //               consectetur adipisicing culpa deserunt quis minim.
      //             </Paragraph>
      //           </Typography>
      //         </Col>
      //         <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
      //           <img src={developmentImage} />
      //         </Col>
      //       </Row>
      //     </Layout>
      //   </Wrapper>
      // </>
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
