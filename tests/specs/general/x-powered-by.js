const chai = require('chai')
const supertest = require('supertest');

chai.should()
const expect = chai.expect
const assert = chai.assert

const api = supertest('http://api:3000')

describe('X-Powered-By', function(){
  var response
  var error

  before(function(done){
    api.get('/')
      .set('Accept', 'application/json')
      .end(function(err, res){
        error = err
        response = res
        done()
      })
  })

  it('responds without an X-Powered-By header', function() {
    expect(response.headers['x-powered-by']).to.be.undefined
  })
})
