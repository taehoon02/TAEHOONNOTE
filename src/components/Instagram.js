import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import numeral from 'numeral';

const Wrapper = styled.div`
  max-width: 300px;
  max-height: 740px;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  color: #3266d6;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: none;
`;

const Container = styled.div`
  display: block;
  box-sizing: border-box;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const AvatarLink = styled.a`
  box-shadow: none;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  flex: 0 0 50%;
  margin: 0;
`;

const Username = styled.a`
  margin-top: 1rem;
  box-shadow: none;
  color: #000;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #3266d6;
  }
`;

const Fullname = styled.a`
  margin-top: 1rem;
  box-shadow: none;
  color: #000;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;
  word-break: break-all;

  &:hover {
    color: #3266d6;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1.2rem;
`;

const Counter = styled.div`
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:last-child {
    margin-left: 0.5rem;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 calc(100% / 2 - 10px);
  margin: 5px;
`;

const ItemLink = styled.a`
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 0;
  box-shadow: none;
`;

const ItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  object-fit: cover;
  pointer-events: none;
  transition: 0.25s;
  user-select: none;
`;

const ItemMeta = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: 0.25s;

  &:hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 40, 40, 0.125);
    content: '';
    opacity: 1;
  }
`;

const ItemMetaLikes = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 12px;
`;

const ItemMetaIcon = styled.i`
  top: 1px;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  text-transform: none;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const FollowButton = styled.a`
  width: auto;
  padding: 0.5rem 1rem;
  background-color: #3266d6;
  border-radius: 100px;
  box-shadow: none;
  transition: all 0.25s ease;

  &:hover {
    background-color: #000;
  }
`;

const FollowText = styled.span`
  color: #fff;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

class Instagram extends React.Component {
  state = {
    fullname: null,
    nickname: null,
    avatar: null,
    following: null,
    follower: null,
    items: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.instagram.com/v1/users/self/?access_token=${
          process.env.INSTAGRAM_ACCESS_TOKEN
        }`,
      )
      .then(res => {
        const fullname = res.data.data.full_name;
        const nickname = res.data.data.username;
        const avatar = res.data.data.profile_picture;
        const following = numeral(res.data.data.counts.follows).format('0a');
        const follower = numeral(res.data.data.counts.followed_by).format('0a');
        this.setState({ fullname, nickname, avatar, following, follower });
      });

    axios
      .get(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
          process.env.INSTAGRAM_ACCESS_TOKEN
        }`,
      )
      .then(res => {
        const items = res.data.data;
        this.setState({ items });
      });
  }

  render() {
    const {
      fullname,
      nickname,
      avatar,
      following,
      follower,
      items,
    } = this.state;
    return (
      <Wrapper>
        <Title>Instagram</Title>
        <Container>
          <HeaderWrapper>
            <HeaderContainer>
              <AvatarLink
                href="https://instagram.com/taehoon_note_"
                target="_blank"
              >
                <Avatar src={avatar} />
              </AvatarLink>
              <Username
                href="https://instagram.com/taehoon_note_"
                target="_blank"
              >
                {nickname}
              </Username>
              <Fullname
                href="https://instagram.com/taehoon_note_"
                target="_blank"
              >
                {fullname}
              </Fullname>
              <CounterWrapper>
                <Counter>{following} FOLLOWING</Counter>
                <Counter>{follower} FOLLOWERS</Counter>
              </CounterWrapper>
            </HeaderContainer>
          </HeaderWrapper>
          <ItemWrapper>
            {items.slice(0, 6).map(data => {
              return (
                <Item>
                  <ItemLink href={data.link} target="_blank">
                    <ItemImg src={data.images.thumbnail.url} />
                    <ItemMeta>
                      <ItemMetaLikes>
                        <ItemMetaIcon className="far fa-heart" />
                        &nbsp;{data.likes.count}
                      </ItemMetaLikes>
                    </ItemMeta>
                  </ItemLink>
                </Item>
              );
            })}
          </ItemWrapper>
          <FooterWrapper>
            <FollowButton
              href="https://instagram.com/taehoon_note_"
              target="_blank"
            >
              <FollowText>FOLLOW</FollowText>
            </FollowButton>
          </FooterWrapper>
        </Container>
      </Wrapper>
    );
  }
}

export default Instagram;
