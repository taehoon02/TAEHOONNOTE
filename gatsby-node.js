const path = require('path');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulBasic(sort: { fields: [date], order: DESC }) {
              edges {
                node {
                  slug
                  categories
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const blogPost = path.resolve('./src/templates/Post.js');
        const categoryPage = path.resolve('src/templates/Category.js');

        const posts = result.data.allContentfulBasic.edges;
        posts.forEach(post => {
          createPage({
            path: `/${post.node.slug}`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        let categories = [];
        _.each(posts, edge => {
          if (_.get(edge, 'node.categories')) {
            categories = categories.concat(edge.node.categories);
          }
        });
        categories = _.uniq(categories);

        categories.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      }),
    );
  });
};
