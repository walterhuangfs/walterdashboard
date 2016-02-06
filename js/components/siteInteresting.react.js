import React from 'react';
import { ListGroup, ListGroupItem, Panel  } from 'react-bootstrap';

export default class SiteInteresting extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true
    };
  }

  openCollapsible() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
        <ListGroup>
          <ListGroupItem onClick={this.openCollapsible()}>Photographybay
            <Panel collapsible expanded={this.state.open}>
            </Panel>
          </ListGroupItem>
          <ListGroupItem>Canopricewatch</ListGroupItem>
          <ListGroupItem>Sigma-rumors</ListGroupItem>
        </ListGroup>
    );
  }
}
