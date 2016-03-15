var React = require('react');
var _ = require('underscore');
var Star = require('./Star');

var StarsWrapper = React.createClass({
  getDefaultProps: function() {
    return {
      numberOfStars: 2000
    };
  },
  renderStars: function(){
    var stars = [];
    _.times(this.props.numberOfStars, function(i){
      stars.push(
        <Star key={"star-" + i} /> 
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