'use strict'

function alphaRandom(stringLength) {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let text = "";
  for (var i = 0; i < stringLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

console.log(alphaRandom(32))