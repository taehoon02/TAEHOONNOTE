import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  background-color: #f7f7f7;
  color: #727272;
  font-size: 17.5px;
  font-weight: 400;
  text-transform: none;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

const Copyright = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid #eaeaea;
  text-align: left;
`;

const CopyrightText = styled.span`
  font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  font-size: 17.5px;
  letter-spacing: 0.05px;
  line-height: 1;
`;

const Footer = () => (
  <Container>
    <Section>
      <Copyright>
        <CopyrightText>
          {new Date().getFullYear()} &copy; 태훈노트. All Rights Reserved.
        </CopyrightText>
      </Copyright>
    </Section>
  </Container>
);

export default Footer;
