var React = require('react');
var Helpers = require('../Utils/Helpers');

var COLORS = ['#ffffff', '#ddddff', '#ffdddd', '#ffffdd'];

var Star = React.createClass({
  getInitialState: function() {
    return {
      size: Helpers.randomFloat(0,4),
      top: Helpers.randomFloat(-10,110),
      left: Helpers.randomFloat(-10,110),
      color: COLORS[Helpers.randomInteger(0,3)],
      opacity: Helpers.randomFloat(0,1),
      twinkleOffset: Helpers.randomFloat(0,1)
    };
  },
  componentDidMount: function() {
    setInterval(this.twinkle, 50)
  },
  twinkle: function(){
    this.setState({
      twinkleOffset: Helpers.randomFloat(0,.5)
    });
  },
  starStyle: function(){
    var twinkleSize = this.state.size + this.state.twinkleOffset
    var style = {
      width: twinkleSize,
      height: twinkleSize,
      borderRadius: twinkleSize,
      top: this.state.top + '%',
      left: this.state.left + '%',
      backgroundColor: this.state.color,
      opacity: this.state.opacity + this.state.twinkleOffset
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