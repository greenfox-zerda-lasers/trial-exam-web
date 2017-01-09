'use strict';
var test = require('tape');
var decrypt = require('./decrypt.js');

test('true', function (t) {
  t.equal(1, 1);
  t.end();
});

test('decrypt alma with 0', function (t) {
  t.equal(decrypt(0, 'alma'), 'alma');
  t.end();
})

test('decrypt alma with 1', function (t) {
  t.equal(decrypt(1, 'zold'), 'ynkc');
  t.end();
})

test.skip('decrypt alma with 25');
test.skip('decrypt alma with 26');
test.skip('decrypt alma with 100');
test.skip('decrypt alma with -25');
test.skip('decrypt alma with -26');
test.skip('decrypt alma with -100');
test.skip('decrypt "" with -10');
test.skip('decrypt 8 with -10');
test.skip('decrypt ALMAAAA with -10');
test.skip('decrypt ALMAAA! with -10');
