import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Title = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px #e9ecef solid;
  margin-top: 0;
  margin-bottom: 2rem;
  color: #000;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.125;
  text-transform: none;
`;

const Content = styled.div`
  color: #4a4949;
  font-size: 17.5px;
  font-weight: 400;
  letter-spacing: 0.05px;
  line-height: 1.75;
`;

const Page = ({ data }) => {
  const page = data.contentfulPage;

  return (
    <Layout>
      <SEO />
      <Title>{page.title}</Title>
      <Content
        dangerouslySetInnerHTML={{
          __html: page.content.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape,
};

export default Page;

export const pageQuery = graphql`
  query PageQuery($title: String!) {
    contentfulPage(title: { eq: $title }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
