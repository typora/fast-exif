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
	it('should not hang up if no exif found', function (done) {
		exif.read(__dirname + '/img_1771_no_exif.jpg').then(function (info) {
			should(info).eql(null);
		}).then(done).catch(done);
	});
});
