import React from 'react';
import ReactDOM from 'react-dom';
import MasterView from './components/master.react';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

main();

function main() {
  ReactDOM.render(
    <MasterView />,
    document.getElementById('app')
  );
}
