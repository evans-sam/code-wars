import chai from 'chai'
import { properFractions } from '../101920.js'

var expect = chai.expect

const TESTS = [
  { input: 1, expected: 0 },
  { input: 2, expected: 1 },
  { input: 5, expected: 4 },
  { input: 15, expected: 8 },
  { input: 25, expected: 20 },
  { input: 9999999, expected: 6637344 },
  { input: 500000003, expected: 500000002 },
  { input: 123456789, expected: 82260072 },
  { input: 1546546846843516846, expected: 715627393129119700 },
]

describe('proporFractions()', function() {
  this.timeout(0)
  for(const { input, expected } of TESTS) {
    it(`should count all reduced fractions with denomenator ${input}`, () => {
      console.time('executed')
      expect(properFractions(input)).to.deep.equal(expected)
      console.timeEnd('executed')
    })
  }

})

