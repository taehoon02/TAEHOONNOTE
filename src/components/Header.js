import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import axios from 'axios';
import numeral from 'numeral';

const Container = styled.div`
  display: flex;
  height: 100px;
  padding: 0 20px;
  margin: 0 240px;
`;

const Section = styled.div`
  display: flex;
  max-height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  min-width: 2rem;
  flex-direction: row;
  margin-right: auto;
`;

const SocialLink = styled.a`
  width: 32px;
  box-shadow: none;
  color: #0a0a0a;
  font-family: sans-serif;
  text-align: center;
  transition: color 0.2s ease;

  &:hover {
    ${props =>
      props.instagram &&
      css`
        color: #c62d8f;
      `}

    ${props =>
      props.github &&
      css`
        color: #666;
      `}
  }
`;

const SocialText = styled.div`
  margin-top: 8px;
  color: #0a0a0a;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1;
  text-transform: uppercase;
`;

const TitleWrapper = styled.div`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.1rem;
  line-height: 100px;
  text-transform: none;
`;

const Title = styled(Link)`
  box-shadow: none;
  color: #000;

  ${props =>
    props.white &&
    css`
      color: #fff;
    `}

  transition: color 0.2s ease;

  &:hover {
    box-shadow: none;
    color: #aaa;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  margin-left: auto;
  line-height: 1.85;
  text-align: center;
`;

const SubscribeButton = styled(Link)`
  padding: 6px 16px;
  border: 1px;
  background-color: #f73832;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background-color: #000;
  }
`;

const SubscribeText = styled.span`
  display: block;
  width: 85px;
  height: 24px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
`;

class Header extends React.Component {
  state = {
    instagramFollowers: null,
    githubFollowers: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.instagram.com/v1/users/self/?access_token=${
          process.env.INSTAGRAM_ACCESS_TOKEN
        }`,
      )
      .then(res => {
        const num = numeral(res.data.data.counts.followed_by).format('0a');
        this.setState({ instagramFollowers: num });
      });

    axios.get(`https://api.github.com/users/taehoon02/followers`).then(res => {
      const num = numeral(res.data.length).format('0a');
      this.setState({ githubFollowers: num });
    });
  }

  render() {
    const { instagramFollowers, githubFollowers } = this.state;
    return (
      <Container>
        <Section>
          <SocialWrapper>
            <SocialLink
              instagram
              href="https://instagram.com/taehoon_note_"
              target="_blank"
            >
              <i className="fab fa-instagram" />
              <SocialText>{instagramFollowers}</SocialText>
            </SocialLink>
            <SocialLink
              github
              href="https://github.com/taehoon02"
              target="_blank"
            >
              <i className="fab fa-github" />
              <SocialText>{githubFollowers}</SocialText>
            </SocialLink>
          </SocialWrapper>
        </Section>
        <Section>
          <TitleWrapper>
            <Title to="/">태훈노트</Title>
          </TitleWrapper>
        </Section>
        <Section>
          <SubscribeWrapper>
            <SubscribeButton to="/subscription">
              <SubscribeText>SUBSCRIBE</SubscribeText>
            </SubscribeButton>
          </SubscribeWrapper>
        </Section>
      </Container>
    );
  }
}

export default Header;
