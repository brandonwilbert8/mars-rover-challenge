const runProgram = require("./rover");

const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

const expected = `1 3 N
5 1 E`;

test("testing the NASA input to runProgram()", () => {
  expect(runProgram(input)).toEqual(console.log(expected));
});
