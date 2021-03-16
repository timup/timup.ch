import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Thumbnail from 'Static/thumbnail/thumbnail.png';

import {
  url,
  social,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'Data';

const organizationStructuredData = `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "legalName": "${legalName}",
        "url": "${url}",
        "logo": "${logo}",
        "foundingDate": "${foundingDate}",
        "founders": [{
            "@type": "Person",
            "name": "${legalName}"
        }],
        "contactPoint": [{
            "@type": "ContactPoint",
            "email": "${contact.email}",
            "telephone": "${contact.phone}",
            "contactType": "customer service"
        }],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "${address.city}",
            "addressRegion": "${address.region}",
            "addressCountry": "${address.country}",
            "postalCode": "${address.zipCode}"
        },
        "sameAs": [
            "${socialLinks.twitter}",
            "${socialLinks.google}",
            "${socialLinks.youtube}",
            "${socialLinks.linkedin}",
            "${socialLinks.instagram}",
            "${socialLinks.github}"
        ]
      }`;

const Head = ({ data }) => (
  <Helmet>
    <html lang="en" dir="ltr" />
    <title>{data.site.siteMetadata.title}</title>

    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="image" content={Thumbnail} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/img/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/img/favicon-16x16.png"
      sizes="16x16"
    />
    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
    <meta name="theme-color" content="#fff" />

    <meta
      property="og:description"
      content={data.site.siteMetadata.description}
    />
    <meta property="og:image" content={Thumbnail} />
    <meta property="og:title" content={data.site.siteMetadata.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${url}/?ref=timup.ch`} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={socialLinks.twitter} />
    <meta
      name="twitter:description"
      content={data.site.siteMetadata.description}
    />
    <meta name="twitter:image:src" content={Thumbnail} />
    <meta name="twitter:site" content={social.twitter} />
    <meta name="twitter:title" content={data.site.siteMetadata.title} />

    <script type="application/ld+json">{organizationStructuredData}</script>
    <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script>
  </Helmet>
);

export default props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Head data={data} {...props} />}
  />
);
