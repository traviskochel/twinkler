// just here to initialize the directory, and perhaps use as template
module.exports = {
  randomFloat: function(min, max){
    return Math.random() * (max - min) + min;
  },
  randomInteger: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

