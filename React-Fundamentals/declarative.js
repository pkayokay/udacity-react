// Declarative vs Imperative
  // Imperative means expressing a command
  // Ex. turning the temperature down in a car.
  // In an old car, we have to do imperative actions by rolling down windows and turning knobs to cool the car down.
  // In a new car, we can 'declare' to the car to bring down the temperature to 70 degrees, the car will take care of the imperative work.

  // Imperative is telling JavaScript HOW to do

  const numbers = [1,2,3,4];
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 10;
  }

  // Declarative is telling Javascript WHAT to do
  const numbers = [1,2,3,4];
  const newNumbers = numbers.map( value => value * 10);