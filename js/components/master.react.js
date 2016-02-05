var React = require('react');
var Navbar = require('react-bootstrap/lib/Navbar');

var Master = React.createClass({
  render: function() {

    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            Walter's Dashboard
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
});

module.exports = Master;
