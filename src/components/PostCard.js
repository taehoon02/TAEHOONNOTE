import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styled from 'styled-components';
import _ from 'lodash';

const Wrapper = styled.div`
  display: flex;
  border-top: 1px #e9ecef solid;
  border-bottom: 1px #e9ecef solid;
  margin-right: -20px;
  margin-bottom: 1rem;
  margin-left: -20px;
  font-size: 4rem;
`;

const MediaWrapper = styled.div`
  position: relative;
  flex: 0 0 50%;
  padding-right: 40px;
  user-select: none;
`;

const MediaLink = styled(Link)`
  position: relative;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  box-shadow: none;
  cursor: pointer;
`;

const MediaImg = styled.img`
  position: relative;
  display: block;
  overflow: hidden;
  width: 380px;
  height: 357px;
  margin-top: -1px;
  background-position: center;
  background-size: cover;
  text-align: center;
`;

const MediaMeta = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex: 0 0 50%;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: all 0.25s ease;

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

const MediaDescription = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ContentWrapper = styled.div`
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

const ContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ContentHeaderCategory = styled(Link)`
  display: inline-block;
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

const ContentHeaderTitle = styled(Link)`
  box-shadow: none;
  color: #0a0a0a;
  font-family: 'Noto Sans', Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  text-transform: none;
  transition: color 0.2s ease;

  &:hover {
    color: #3266d6;
  }
`;

const ContentHeaderMeta = styled(Link)`
  margin-top: 1rem;
  box-shadow: none;
  color: #0a0a0a;
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #3266d6;
  }
`;

const ContentExcerpt = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.05px;
  line-height: 1.85;
  text-align: left;
`;

const PostCard = ({
  category,
  thumbnail,
  link,
  title,
  date,
  readtime,
  excerpt,
}) => {
  return (
    <Wrapper>
      <MediaWrapper>
        <MediaLink to={link}>
          <MediaImg src={thumbnail} />
          <MediaMeta>
            <MediaDescription>VIEW POST →</MediaDescription>
          </MediaMeta>
        </MediaLink>
      </MediaWrapper>
      <ContentWrapper>
        <ContentHeaderWrapper>
          <ContentHeaderCategory to={`/category/${_.kebabCase(category)}`}>
            {category}
          </ContentHeaderCategory>
          <ContentHeaderTitle to={link}>{title}</ContentHeaderTitle>
          <ContentHeaderMeta to={link}>
            {date} ∙ {readtime}분 읽기
          </ContentHeaderMeta>
        </ContentHeaderWrapper>
        <ContentExcerpt>{excerpt}</ContentExcerpt>
      </ContentWrapper>
    </Wrapper>
  );
};

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
