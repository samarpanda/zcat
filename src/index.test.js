/*global describe it*/
var expect = require('chai').expect
var z = require('.')

describe('z categories', function(){
  it('all categores', function(){
    expect(isArrayOfObjects(z.all)).to.be.true
  })
})

function isArrayOfObjects(arr){
  return arr.every(function(item){
    return typeof item.text === 'string' && typeof item.value === 'string'
  })
}