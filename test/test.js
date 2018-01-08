var assert = require("assert"); // core module
var C = require('../cash.js');  // our module
it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})
it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
    assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
})

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
});
