var React = require('react');
var Helpers = require('../Utils/Helpers');

var COLORS = ['#ffffff', '#ddddff', '#ffdddd', '#ffffdd'];

var Star = React.createClass({
  propTypes: {
    index: React.PropTypes.number
  },
  getInitialState: function() {
    var opacity = Helpers.randomFloat(.1,1);
    return {
      size: Helpers.randomFloat(.1,4),
      top: Helpers.randomFloat(-10,110),
      left: Helpers.randomFloat(-10,110),
      color: Helpers.hexToRGBA(COLORS[Helpers.randomInteger(0,3)],opacity),
      opacity: opacity,
    };
  },
  starStyle: function(){
    var style = {
      width: this.state.size,
      height: this.state.size,
      borderRadius: this.state.size,
      top: this.state.top + '%',
      left: this.state.left + '%',
      backgroundColor: this.state.color
    }
    return style;
  },
  render: function() {
    return (
      <div 
        style={this.starStyle()}
        className={'stars--star stars--star-' + (this.props.index % 10)} />
    );
  }

});

module.exports = Star;