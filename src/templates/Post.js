import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import _ from 'lodash';
import Disqus from 'gatsby-plugin-disqus';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import '../scss/markdown.scss';

const Header = styled.div`
  position: relative;
  margin-bottom: 3rem;
  color: #000;
`;

const Title = styled.div`
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  color: #000;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.125;
  text-transform: none;
`;

const MetaCategory = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  box-shadow: none;
  color: #3266d6;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    box-shadow: none;
    color: #aaa;
  }
`;

const MetaPost = styled.span`
  display: block;
  margin-top: 1.5rem;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Section = styled.div`
  position: relative;
  display: block;
  margin: auto;
`;

const MainPost = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 720px;
  flex: 0 0 720px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  line-height: 1.8;
`;

const Post = ({ data }) => {
  const post = data.contentfulBasic;

  return (
    <Layout>
      <SEO />
      <Header>
        <MetaCategory
          to={`/category/${_.kebabCase(post.categories)}`}
          className="meta-category"
        >
          {post.categories.join(`, `)}
        </MetaCategory>
        <Title>{post.title}</Title>
        <MetaPost>
          {post.date} ∙ {post.readtime}분 읽기
        </MetaPost>
      </Header>
      <Section className="post-media">
        <img src={post.thumbnail.file.url} alt="" />
      </Section>
      <MainPost
        dangerouslySetInnerHTML={{
          __html: post.content.childMarkdownRemark.html,
        }}
      />
      <Disqus identifier={post.slug} title={post.title} />
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape,
};

export default Post;

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
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
