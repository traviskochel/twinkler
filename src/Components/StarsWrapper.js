var React = require('react');

var StarsWrapper = React.createClass({
  getDefaultProps: function() {
    return {
      numberOfStars: 10
    };
  },
  renderStars: function(){
    
  },
  render: function() {
    return (
      <div className='stars-wrapper'>
        {this.renderStars()}
      </div>
    );
  }

});

module.exports = StarsWrapper;