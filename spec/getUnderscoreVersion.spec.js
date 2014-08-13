'use strict';

var expect = require('chai').expect;

var getUnderscoreVersion = require('../lib/getUnderscoreVersion');

describe('getUnderscoreVersion', function () {
    it('must work', function () {
        expect(typeof getUnderscoreVersion).to.equal('function');
        expect(getUnderscoreVersion()).to.equal('1.6.0');
    });
});