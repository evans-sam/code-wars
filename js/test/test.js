import chai from 'chai'
import { properFractions } from '../101920.js'
import { mixedFraction, phone, solution } from '../102020.js'
import {
  proporFractionsTests,
  mixedFractionsTests,
  phoneTests,
} from './test_data.js'

var expect = chai.expect

describe('proporFractions()', function() {
  this.timeout(0)
  for(const { input, expected } of proporFractionsTests) {
    it(`should count all reduced fractions with denomenator ${input}`, () => {
      expect(properFractions(input)).to.deep.equal(expected)
    })
  }

})

describe('mixedFractions()', function() {
  for(const { input, output } of mixedFractionsTests) {
    it(`correctly reduce ${input} to ${output}`, () => {
      expect(mixedFraction(input)).to.equal(output)
    })
  }
})

describe("phone()", function() {
  for(const { input, expected } of phoneTests) {
    it(`Correctly returns contact`, () => {
      expect(phone(input.string, input.number)).to.equal(expected)
    })
  }
})

describe('solution()', function() {
  it('correctly returns the range extraction', () => {
    expect(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).to.equal("-6,-3-1,3-5,7-11,14,15,17-20")
  })
})