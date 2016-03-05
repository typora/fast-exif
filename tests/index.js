'use strict';

var should = require('should');
var exif = require('../');

describe('fast-exif', function () {
	it('should work', function (done) {
		// http://www.exiv2.org/sample.html
		exif.read(__dirname + '/img_1771.jpg').then(function (info) {
			info.exif.ApertureValue.should.eql(4.65625);
		}).then(done).catch(done);
	});
});
