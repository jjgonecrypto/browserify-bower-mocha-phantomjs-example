'use strict';

var getUnderscoreVersion = require('./getUnderscoreVersion');
var getjQueryVersion = require('./getjQueryVersion');
var $ = require('jquery');

var template = require('../template/index.hbrs');

$(function () {
    $('body').html(template({title: 'Versions', jquery: getjQueryVersion(), underscore: getUnderscoreVersion() }));
});