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
    const posts = data.allContentfulBasic.edges;

    return (
      <Layout title={siteTitle}>
        <SEO keywords={[`blog`, `taehoon`, `note`]} />
        {posts.map(({ node }) => {
          return (
            <div>
              <PostCard
                thumbnail={node.thumbnail.file.url}
                category={node.categories}
                link={node.slug}
                title={node.title}
                date={node.date}
                readtime={node.readtime}
                excerpt={node.introductory.childMarkdownRemark.excerpt}
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
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBasic(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          thumbnail {
            file {
              url
            }
          }
          title
          slug
          date(formatString: "YYYY년 M월 D일")
          readtime
          categories
          introductory {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;
