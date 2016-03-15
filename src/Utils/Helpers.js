// just here to initialize the directory, and perhaps use as template
module.exports = {
  randomNumber: function(min, max){
    return Math.random() * ((max + 1) - min) + min;
  }
}

