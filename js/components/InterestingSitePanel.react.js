import React from 'react';
import {ListGroupItem, Panel} from 'react-bootstrap';

export default class InterestingSitePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openCollapsible() {
    this.setState({
      // Good use of Javascript here
      open: !this.state.open
    });
  }

  render() {
    return (
      <ListGroupItem onClick={() => this.openCollapsible()}>
        {this.props.title}
        <Panel collapsible expanded={this.state.open}>
          <a href={"http://" +this.props.url}>Go to site</a>
        </Panel>
      </ListGroupItem>
    );
  }
}

InterestingSitePanel.propTypes = {
  title: React.PropTypes.string,
  url: React.PropTypes.string
};
