//importei o objeto "validator" com os metodos "isValid" e "maskify"

import validator from '../src/validator';

//isValid

describe('validator', () => {

  it('should be an object', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {

    it('should be a function', () => {
      expect(typeof validator.isValid).toBe('function');
    });
        
    it("should return '1234567891234567' for '7654321987654321'", () =>{
      const expected = false
      const value = '1234567891234567'
      expect(validator.isValid(value)).toBe(expected);
    });


  })})

  //maskify
describe('validator.maskify', () => {

    it('should be a function', () => {
      expect(typeof validator.maskify).toBe('function');
    });
    
    it("should return '1234567891234567' for '#### #### #### 4567'", () =>{
      const expected = '#### #### #### 4567'
      const value = '1234567891234567'
      expect(validator.maskify(value)).toBe(expected);
    });
    
  })

