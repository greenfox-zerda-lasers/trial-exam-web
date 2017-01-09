'use strict';

function decrypt (shift, text) {
  return text.split('').map(function (character, index){
    return String.fromCharCode(text.charCodeAt(index)-shift);
  }).join('');
};

module.exports = decrypt;
