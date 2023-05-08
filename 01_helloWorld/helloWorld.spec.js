const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});



// izmene sa R
// const helloWorld = require('./helloWorld');

// describe('Hello World', function() {
//   test('says "Hello, World!"', function() {
//     expect(helloWorld(4,5)).toBe(9);
//   });

//   test("test 2",function(){

//     expect(helloWorld("ddasd",3)).toBe("ddasd3")
//   })
// });


