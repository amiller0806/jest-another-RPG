## Expect.any() method
    // The expect.any() method takes a constructor as an argument. Here, we're 
    // expecting: value property is created w/ a Number() constructor. In this instancve, 
    // we allow the value to be any #, rather than a # in a 
    // range so that the test has more flexibility. 



## Constructor Functions
Constructor functions: act like blueprints for objects. Since they don't have a return statement, they return UNDEFINED by default. BUT, unlike a regular function, they're meant to be used  with the NEW keyword.
-   ESSENTIAL that: we do NOT use arrow functions as constructor fns. 
Arrow functions CHANGE the meaning of the keyword 'THIS', a core piece of CONSTRUCTOR 
FUNCTIONS.
- Capitalizing constructor functions is a popular naming convention for them 
- invoke the __insert object___() constructor by calling it with the new keyword

## What is the value of the THIS keyword in a constructor function?

The instance of a new object that’s created using the constructor function. The value of this is determined at the time of the function execution.

## TDD
TDD has the following steps:
Think & write test cases.
Red – Failure of test case.
Green – Code and get the new test case pass.
Green – Ensure all old test cases also pass.
Refactor the code to clean it.
Repeat this cycle.
TDD follows a pattern of writing failing tests, then making them pass with working code, then refactoring your code.

## Mocking Tests
Mocking, or faking, data is an important part of testing. In development, constructors sometimes have other dependencies that aren't directly related to the functionality you're trying to test. Mocking these dependencies ensures that each test focuses on a singular purpose.

 Mocks allow us to fake assumed data, which allows the test at hand to focus only on the logic it cares about.