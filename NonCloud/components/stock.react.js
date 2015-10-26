var React = require('react');
var ReactPropTypes = React.PropTypes;
var YahooFinance = require('yahoo-finance');
var moment = require('moment');

var Stock = React.createClass({

  getInitialState: function() {
    return {
      // At 3:55 pm
      currPrice: '',
      // p0 ? preivous closing cost
      closingPrices24: []
    };
  },

  componentDidMount: function() {
    var format = 'YYYY-MM-DD';
    var today = moment().format(format);
    var preDate = moment().subtract(24, 'days').format(format);

    YahooFinance.historical({
      symbol: this.props.stockName,
      from: preDate,
      to: today,
    }, function (err, quotes){
      this.setState({
        closingPrices24 : quotes
      });
    }.bind(this));
  },

  propTypes: {
    stockName: ReactPropTypes.string.isRequired
  },

  render: function() {
    var stockName = this.props.stockName;
    var ema5;
    var ema24;

    var displaying = "Displaying stock : " + stockName;
    return (
      <div>
        <p>{displaying}</p>
      </div>
    );
  }
});

module.exports = Stock;
