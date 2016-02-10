import React from 'react';
import {ListGroup, ListGroupItem, Panel, Button} from 'react-bootstrap';
import InterestingSitePanel from './InterestingSitePanel.react';

export default class SiteInteresting extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    let items = [
      <InterestingSitePanel title="Photography Bay" url="www.photographybay.com"/>,
      <InterestingSitePanel title="Canon Price Watch" url="www.canonpricewatch.com"/>
    ];

    return (
      <div>
        <ListGroup>
          {items}
        </ListGroup>
      </div>
    );
  }
}
