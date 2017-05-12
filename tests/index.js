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
	it('should not skip exif if 0xFF byte precedes marker (issue #2)', function (done) {
		exif.read(__dirname + '/issue2.jpg', true).then(function (info) {
			info.exif.ApertureValue.should.eql(5.655638);
		}).then(done).catch(done);
	});
});
