'use strict';

var expect = require('chai').expect;

var getjQueryVersion = require('../lib/getjQueryVersion');

describe('getjQueryVersion', function () {
  it('must work', function () {
    expect(typeof getjQueryVersion).to.equal('function');
    expect(getjQueryVersion()).to.equal('2.1.1');
  });
});