//requirements
// if input is prime check should return "{{Number}} is Prime" 
// if input is not prime check should return "{{Number}} is not Prime" 
// if input is prime check should return "{{Number}} is Prime, there are {{x}} prime numbers before {{Number}}" 
// if input is not prime check should return "{{Number}} is not Prime, it id divisible by {{divisor x}}, {{divisor x+n}}" 

describe('tests', function(){
  let number;

  beforeEach(module('demo'));

  beforeEach(inject(function (_Number_) {
    const Number = _Number_;

    number = new Number();
  }));

  it("1 should return prime", function() {
    //return value
    expect(number.check(1)).toBe('1 is prime, there are 0 number before it');
  });

  it("4 should return not prime", function() {
    //return value
    expect(number.check(4)).toBe('4 is not prime');
  });

  it("7 should return prime", function() {
    //return value
    expect(number.check(7)).toBe('7 is prime, there are 4 number before it');
  });

})