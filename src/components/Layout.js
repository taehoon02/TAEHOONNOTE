import React from 'react';

import Header from './Header';
import Navbar from './Navbar';

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
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
