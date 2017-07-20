'use strict';

const expect = require('chai').expect;
const readFileHelper = require('../lib/read-file-helper.js');

describe('Read File Helper', function() {
  describe('with improper file paths', function() {
    it('should return an error', function() {
      readFileHelper([`${__dirname}/dont-exist.txt`], function(err) {
        expect(!!err).to.equal(true);
      });
    });
  });

  describe('with proper file paths', function() {
    before(done => {
      this.paths = [
        `${__dirname}/../data/one.txt`,
        `${__dirname}/../data/two.txt`,
        `${__dirname}/../data/three.txt`
      ];
      done();
    });

    it('should have the correct order of hex strings', (done) => {
      var expectedResult = [ '736f6d652072616e', '736f6d6520636f6f', '6d6f726520676e61' ];
      readFileHelper(this.paths, function(err, data) {
        expect(err).to.equal(null);
        expect(data[0]).to.equal(expectedResult[0]);
        expect(data[1]).to.equal(expectedResult[1]);
        expect(data[2]).to.equal(expectedResult[2]);
      });
    });
  });
});
