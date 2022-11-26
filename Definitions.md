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