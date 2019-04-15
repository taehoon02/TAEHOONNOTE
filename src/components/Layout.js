import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

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
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Layout;
