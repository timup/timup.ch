# timup.ch

[![Netlify Status](https://api.netlify.com/api/v1/badges/0fb0457c-ecd9-4b0d-ade8-d449a4829f28/deploy-status)](https://app.netlify.com/sites/timupch/deploys)

A personal website built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org).

The initial structure was inspirired by [gatsby-portfolio-dev](https://github.com/smakosh/gatsby-portfolio-dev) by [@smakosh](https://github.com/smakosh).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment. You’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally
```
$ git clone https://github.com/timup/timup.ch.git
$ cd timup.ch
$ yarn
$ yarn start
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Purgecss
The build uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/).
