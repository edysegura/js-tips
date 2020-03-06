'use strict'

function alphaRandom(stringLength) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  for (var i = 0; i < stringLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text.split(/(\w{4})/).join('-');
}

console.log(alphaRandom(32))