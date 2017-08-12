const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer.js');

describe('fizzBuzz', function() {

it('should return fizz-buzz for multiples of 15', function() {
      [15, 30, 45].forEach(function(input) {
      fizzBuzz(input).should.equal('fizz-buzz');
    });
  });

it('should return fizz for multiples of 3', function() {
	[3, 6, 9, 12].forEach(function(input) {
		fizzBuzz(input).should.equal('fizz');
	});
});

it('should return buzz for multiples of 5', function() {
	[5, 10, 20].forEach(function(input) {
		fizzBuzz(input).should.equal('buzz');
	});
});

it('should return the number if not a multiple of 3 or 5', function() {
	[4, 8, 11, 17].forEach(function(input) {
		fizzBuzz(input).should.equal(input);
	});
});

it('should throw an error if not a number', function() {
	const badInputs = [
	'a',
	true,
	'spoon',
	['a', 'b', 'c']
	 ]
	 badInputs.forEach(function(input) {
		(function() {
			fizzBuzz(input)
		}).should.throw(Error);
	});
});

});