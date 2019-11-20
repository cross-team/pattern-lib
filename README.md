# pattern-lib

An open source pattern library built with Gatsby that uses Github issues as its CMS.

## Table of Contents

1. [Gatsby Default Starter](#gatsby-default-starter)
2. [Instructions: How to Use the Pattern Library](#instructions-how-to-use-the-pattern-library)

---

# Gastby Default Starter

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🍴 Cloning/Forking this Repo

If you are looking to clone or fork this repo to run it locally, you will need to create a personal access token for the Github API. This can be done by going [here](https://github.com/settings/tokens) while logged into Github. There you can create a token with the appropriate permissions to read issues and generate the key that will let you access it. Once it's generated, copy the key to your clipboard.

Now create a `.env.development` file in the project root containing: `GITHUB_API_KEY=YOUR_API_KEY` where YOUR_API_KEY is the key you just copied. If you are planning on deploying the app to a production environment you need to create a `.env.production` file as well with the same code as the `.env.development` file you just made.

## 🚀 Quick start

1.  **Start developing.**

    Navigate to the root directory to install your dependencies and start it up.

    ```
    yarn install
    yarn run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->

---

# Instructions: How to Use the Pattern Library

## Github Issues as CMS

One of the main problems we were trying to solve in this project was providing a Content Management System (CMS) that was familiar, easy to get started with, and inexpensive.

There are great static site generators out there, but could we go further?  

Using **Github Issues** helped solve our problem:

- Creating an issue in Github is familiar to many in the design and development community.  
- Writing the issue's description in markdown allows for content creation similar to other static site generators.  
- Github issues provide revision history to help manage content changes.  
- Issue templates, such as the pattern library template we created, help author specific types of content more easily.

## Creating a Pattern

Use the following Github Issue fields to author your pattern:

- Assignees: Pattern Author(s)
- Labels: Help others find your pattern with label tags such as `tabs`, `tab-content`, `button`, `carousel`, `image`, etc.
- Projects: TBD
- Milestone: Use milestones to create pattern categories such as `component` or `input`.  

After you create your pattern, view issue comment revision history to view edits to your pattern entry.

You can attach any file types accepted by Github Issues, including images and GIFs.  Video is not currently supported.  

## Managing the Pattern Library

- Only open issues are published.  Once an issue is closed, the content is removed from the pattern library.  
- In the Gatsby configuration, choose certain labels to publish.  For example, choose to only push issues with a label of 'publish' to the pattern library.
