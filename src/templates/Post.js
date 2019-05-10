import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import _ from 'lodash';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import '../scss/templates/post.scss';

const Post = ({ data }) => {
  const post = data.contentfulBasic;

  return (
    <Layout>
      <SEO title={post.title} />
      <header className="header">
        <Link
          to={`/category/${_.kebabCase(post.categories)}`}
          className="meta-category"
        >
          {post.categories.join(`, `)}
        </Link>
        <h1 className="title">{post.title}</h1>
        <span className="meta-post">
          {post.date} ∙ {post.readtime}분 읽기
        </span>
      </header>
      <section className="post-media">
        <img src={post.thumbnail.file.url} alt="" />
      </section>
      <div
        className="post-main"
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      />
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
