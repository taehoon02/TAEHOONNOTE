import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

const Post = ({ data }) => {
  const post = data.contentfulBasic;
  const siteTitle = data.site.siteMetadata.title;
  // const previous = data.;
  // const next = data.
  // const { location } = data.location;

  return (
    <Layout title={siteTitle}>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.date}
        <br />
        {post.categories.join(`, `)}
        <br />
        {post.readtime}
      </p>
      <p
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape,
};

export default Post;

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBasic(slug: { eq: $slug }) {
      thumbnail {
        file {
          url
        }
      }
      title
      date(formatString: "YYYY년 M월 D일")
      readtime
      categories
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
