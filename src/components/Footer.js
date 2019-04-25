import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  background-color: #f7f7f7;
  color: #727272;
  font-family: 'NotoSansKR', sans-serif;
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

const Subcribe = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const SubcribeTitle = styled.span`
  margin-bottom: 1rem;
  color: #0a0a0a;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.05px;
`;

const SubcribeMessage = styled.span`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  letter-spacing: 0;
`;

const Copyright = styled.div`
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid #eaeaea;
  text-align: left;
`;

const CopyrightText = styled.span`
  letter-spacing: -0.05px;
  line-height: 1;
`;

const Footer = () => (
  <Container>
    {/* <Section>
      <Subcribe>
        <SubcribeTitle>태훈노트 뉴스레터를 구독해보세요!</SubcribeTitle>
        <SubcribeMessage>
          매주 토요일! 0명이 메일로 받아 보는 뉴스레터
        </SubcribeMessage>
      </Subcribe>
    </Section> */}
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
