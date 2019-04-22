import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  max-height: 328px;
  margin-right: -20px;
  margin-left: -20px;
  border-top: 1px #e9ecef solid;
  border-bottom: 1px #e9ecef solid;
  font-size: 4rem;
`;

const MediaWrapper = styled.div`
  position: relative;
  flex: 0 0 50%;
  padding-right: 20px;
  padding-left: 20px;
`;

const Media = styled.img`
  position: relative;
  display: block;
  overflow: hidden;
  width: 380px;
  height: 328px;
  margin-top: -1px;
  background-position: center center;
  background-size: cover;
  text-align: center;
`;

const ContentWrapper = styled.div`
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
`;

const ContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ContentHeaderCategory = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  box-shadow: none;
  color: #f73832;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ContentHeaderTitle = styled(Link)`
  box-shadow: none;
  color: #0a0a0a;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-transform: none;
  transition: color 0.2s ease;

  &:hover {
    color: #f73832;
  }
`;

const ContentHeaderDate = styled(Link)`
  margin-top: 1rem;
  box-shadow: none;
  color: #0a0a0a;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #f73832;
  }
`;

const ContentExcerpt = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.05px;
  line-height: 1.85;
  text-align: left;
`;

class PostCard extends React.Component {
  render() {
    const {
      category,
      thumbnail,
      link,
      title,
      date,
      readtime,
      excerpt,
    } = this.props;
    return (
      <Wrapper>
        <MediaWrapper>
          <Media src={thumbnail} />
        </MediaWrapper>
        <ContentWrapper>
          <ContentHeaderWrapper>
            <ContentHeaderCategory>{category.join(`, `)}</ContentHeaderCategory>
            <ContentHeaderTitle to={link}>{title}</ContentHeaderTitle>
            <ContentHeaderDate to={link}>
              {date} ∙ {readtime}분 읽기
            </ContentHeaderDate>
          </ContentHeaderWrapper>
          <ContentExcerpt>{excerpt}</ContentExcerpt>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

PostCard.propTypes = {
  category: PropTypes.arrayOf(PropTypes.string),
  thumbnail: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  readtime: PropTypes.string,
  excerpt: PropTypes.string,
};

export default PostCard;
