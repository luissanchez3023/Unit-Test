const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
   // ARRANGE
   const a = 2;
   const b = 3;

   // ACT
   const result = functions.multiply(a, b);

   // ASSERT
   expect(result).toBe(6);
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
 // ARRANGE

    // ACT
    const result = functions.isNull();

    // ASSERT
    expect(result).toBeNull();

  });
});

describe('checkTruthy function', () => {
  it('should return true when true is passed', () => {
    // ARRANGE
    const value = true;

    // ACT
    const result = functions.checkTruthy(value);

    // ASSERT
    expect(result).toBe(true);
  });

  it('should return false when false is passed', () => {
    // ARRANGE
    const value = false;

    // ACT
    const result = functions.checkTruthy(value);

    // ASSERT
    expect(result).toBe(false);
  });
});


describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
     // ARRANGE
     const firstName = 'Pepito';
     const lastName = 'Perez';
 
     // ACT
     const result = functions.addLastName(firstName, lastName);
 
     // ASSERT
     expect(result).toBe('Pepito Perez');
  });
})
