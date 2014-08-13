'use strict';

var getUnderscoreVersion = require('./getUnderscoreVersion');
var getjQueryVersion = require('./getjQueryVersion');
var $ = require('jquery');

$(function () {
  var html = '<h1>Versions</h1>';
  html += '<dl><dt>Underscore</dt><dd>' + getUnderscoreVersion() + '</dd>';
  html += '<dt>jQuery</dt><dd>' + getjQueryVersion() + '</dd></dl>';
  $('body').html(html);
});