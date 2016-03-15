var React = require('react');
var _ = require('underscore');
var Star = require('./Star');
var Helpers = require('../Utils/Helpers');

var StarsWrapper = React.createClass({
  getDefaultProps: function() {
    return {
      numberOfStars: 2000
    };
  },
  renderStars: function(){
    var stars = [];
    var _this = this;
    _.times(this.props.numberOfStars, function(i){
      stars.push(
        <Star 
          key={"star-" + i}
          index={i} /> 
      );
    });
    return stars;
  },
  render: function() {
    return (
      <div className='stars--wrapper'>
        {this.renderStars()}
      </div>
    );
  }

});

module.exports = StarsWrapper;