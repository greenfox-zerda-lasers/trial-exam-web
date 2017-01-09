'use strict';

console.log('igen');

var button = document.querySelector('button');
var list = document.querySelector('ul');
var text2encode = document.querySelector('textarea');
var shift = document.querySelector('input');
var loading = document.querySelector('span');

button.addEventListener('click', function () {
  loading.classList.remove('hide');

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:3000/decode', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify({
    shift: shift.value,
    text: text2encode.value
  }));
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log(httpRequest.responseText);
          var decodedItem = JSON.parse(httpRequest.responseText).text;
          list.innerHTML += '<li>' + decodedItem + '</li>';
          loading.classList.add('hide');
        } else {
          alert('There was a problem with the request.');
        }
      }
  };
});

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'http://localhost:3000/decode/all', true);
httpRequest.send(null);
httpRequest.onreadystatechange = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var decodedList = JSON.parse(httpRequest.responseText).all;
        decodedList.forEach(function(item){
          list.innerHTML += '<li>' + item + '</li>';
        });
        loading.classList.add('hide');
      } else {
        alert('There was a problem with the request.');
      }
    }
};
