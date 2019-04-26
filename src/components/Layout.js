import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import Instagram from './Instagram';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <main>{children}</main>
        <Instagram />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.shape,
};

export default Layout;
