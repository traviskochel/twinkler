var React = require('react');
var Helpers = require('../Utils/Helpers');

var Star = React.createClass({
  getInitialState: function() {
    return {
      size: Helpers.randomNumber(1,6),
      top: Helpers.randomNumber(-10,110),
      left: Helpers.randomNumber(-10,110)
    };
  },
  starStyle: function(){
    var style = {
      width: this.state.size,
      height: this.state.size,
      borderRadius: this.state.size,
      top: this.state.top + '%',
      left: this.state.left + '%'
    }
    return style;
  },
  render: function() {
    return (
      <div 
        style={this.starStyle()}
        className='stars--star' />
    );
  }

});

module.exports = Star;