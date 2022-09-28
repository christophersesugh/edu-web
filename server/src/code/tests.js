// import solution from "./input_code.js";
import fs from "fs";

// const solution = fs.readFileSync(, "utf-8");
function getTestCases() {
  return [
    {
      SMALL_INPUT: [1, 2, 3],
      LARGE_INPUT: [1, 2, 3] * 1000 + [4],
    },
  ];
}

function getExpectedOutput() {
  return {
    SMALL_INPUT: 3,
    LARGE_INPUT: 4,
  };
}

function testCode() {
  let testCases = getTestCases();
  let expected = getExpectedOutput();
  let testCasesCount = testCases.length;
  let passedTestCases = 0;
  let failedTestCases = [];
  for (const label in testCases.keys()) {
    let codeResult = solution(testCases[label]);
    if (codeResult === expected[label]) return (passedTestCases += 1);
    else failedTestCases.push(label);
  }
  console.log(
    "Passed",
    passedTestCases,
    "out of",
    testCasesCount,
    "test cases"
  );

  if (failedTestCases.length > 0)
    console.log("Test cases not passed:", ", ".join(failedTestCases));
}
testCode();
