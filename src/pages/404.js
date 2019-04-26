import React from 'react';
import { Layout, Head } from 'Components';

export default () => (
  <Layout>
    <Head title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);
