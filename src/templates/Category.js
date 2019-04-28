import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import PostCard from '../components/PostCard';

const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.div`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.125;
  text-transform: none;
`;

const PostCount = styled.div`
  margin-top: 1rem;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const PostWrapper = styled.div`
  padding-top: 3rem;
  border-top: 1px #e9ecef solid;
`;

const Category = ({ data }) => {
  const { edges, totalCount } = data.allContentfulBasic;

  return (
    <Layout>
      <SEO title="category" />
      <div>
        <HeaderWrapper>
          <Title>DEVELOP</Title>
          <PostCount>{totalCount} POSTS</PostCount>
        </HeaderWrapper>
        <PostWrapper>
          {edges.map(({ node }) => {
            return (
              <PostCard
                thumbnail={node.thumbnail.file.url}
                category={node.categories}
                link={node.slug}
                title={node.title}
                date={node.date}
                readtime={node.readtime}
                excerpt={node.introductory.childMarkdownRemark.excerpt}
              />
            );
          })}
        </PostWrapper>
      </div>
    </Layout>
  );
};

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allContentfulBasic: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }),
        }).isRequired,
      ),
    }),
  }),
};

export default Category;

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBasic(
      sort: { fields: [date], order: DESC }
      filter: { categories: { in: [$category] } }
    ) {
      totalCount
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
