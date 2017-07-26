'use strict';

const request = require('superagent');
const expect = require('chai').expect;

require('../server.js');

describe('Note Routes', function() {
  var note = null;

  describe('POST: /api/note', function() {
    it('should return a note', function(done) {
      request.post('localhost:8000/api/note')
      .send({ name: 'test name', content: 'test content' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('test name');
        expect(res.body.content).to.equal('test content');
        console.log('POST request note:', res.body);
        note = res.body;
        done();
      });
    });
  });

  describe('GET: /api/note', function() {
    it('should return a note', function(done) {
      request.get(`localhost:8000/api/note?id=${note.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.name).to.equal('test name');
        expect(res.body.content).to.equal('test content');
        console.log('GET request note:', res.body);
        done();
      });
    });
  });
});
