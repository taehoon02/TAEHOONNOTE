import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Instagram from './Instagram';

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

const ContentArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  max-width: 840px;
  flex: 0 0 840px;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 20px;
  padding-left: 20px;
`;

const WidgetArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0;
  max-width: 360px;
  flex: 0 0 360px;
  flex-direction: column;
  flex-wrap: wrap;
  padding-right: 20px;
  padding-left: 40px;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Navbar />
        <Wrapper>
          <Container>
            <ContentArea>{children}</ContentArea>
            {/* <WidgetArea>
              <Instagram />
            </WidgetArea> */}
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.shape,
};

export default Layout;
