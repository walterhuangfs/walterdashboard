var React = require('react');
var Stock = require('./stock.react');

var Master = React.createClass({
  render: function() {

    var stocks = ["APPL"];

    var stockComps = [];
    for (var i in stocks) {
      var s = stocks[i];
      stockComps.push(
        <li key={i}>
          <Stock stockName={s} />
        </li>);
    }

    return (
      <div>
        <p>Naive stock information is here</p>
        <ul>
          {stockComps}
        </ul>
      </div>
    );
  }
});

module.exports = Master;
