const path = require('path');

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
      }),
    );
  });
};
