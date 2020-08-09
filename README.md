# fivepixelparallax

This is the home of [fivepixelparallax](https://fivepixelparallax.com) Web Development Agency.

For enquiries, email [info@fivepixelparallax.com](mailto:info@fivepixelparallax.com).

## Prerequisites

- Node `10.20.1`
- [yarn](https://yarnpkg.com/)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started

```
$ npm i
$ yarn
```

## Develop

```
$ ntl dev
```

The site will then be locally run at [http://localhost:8000/](http://localhost:8000/) with a GraphiQL instance for site data available at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Deploy

[![Netlify Status](https://api.netlify.com/api/v1/badges/3180aa8d-704e-4a65-957d-f1312bc9a472/deploy-status)](https://app.netlify.com/sites/fivepixelparallax/deploys)

This site is built with [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/), and [Netlify CMS](https://www.netlifycms.org).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

During build, this repo uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/). The style builds are usually ~170K but reduced 90% by purgecss.
