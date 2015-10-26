var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');

var MasterView = require('./components/master.react');

React.render(
  <MasterView />,
  document.getElementById('app')
);
