import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import SiteInteresting from './siteInteresting.react';

export default class Master extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand><a href="#">Walter-Dasbboard</a></Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Navbar.Toggle />
        <SiteInteresting></SiteInteresting>
      </div>
    );
  }
}
