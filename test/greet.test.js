const greet = require('../lib/greet');

test('should return Hello Adam', () => {
  //Arrange
  //Act
  //Assert
  let actual = greet.sayHello('Adam');
  let expectedValue = 'Hello Adam';

  expect(actual).toBe(expectedValue);
});

test('should return null with no args', () => {
  expect(greet.sayHello()).toBeNull();
});