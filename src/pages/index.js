import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import PostCard from '../components/PostCard';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout title={siteTitle}>
        <SEO keywords={[`blog`, `taehoon`, `note`]} />
        {posts.map(({ node }) => {
          return (
            <div>
              <PostCard
                thumbnail={node.frontmatter.featuredImage}
                category={node.frontmatter.category}
                link={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes,
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY년 M월 DD일")
            category
          }
        }
      }
    }
  }
`;
