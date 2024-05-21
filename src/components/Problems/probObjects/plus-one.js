
export const plusOneHandler = (digits) => {
  try {
    const plusOne = (digits) => {
      for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
          digits[i]++;
          return digits;
        } else {
          digits[i] = 0;
        }
      }
      digits.unshift(1);
      return digits;
    };

    const tests = [
      { digits: [1, 2, 3], expectedOutput: [1, 2, 4] },
      { digits: [4, 3, 2, 1], expectedOutput: [4, 3, 2, 2] },
      { digits: [9], expectedOutput: [1, 0] },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { digits, expectedOutput } = tests[i];
      const result = plusOne(digits);
      if (!arraysAreEqual(result, expectedOutput)) {
        throw new Error(
          `Test failed for input ${digits}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from plusOneHandler: ", error);
    throw new Error(error);
  }
};

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const plusOne = {
  name: "plus-one",
  id: 11,
  difficulty: "Easy",
  acceptance: "42.4%",
  title: "66. Plus One",
  problemStatement: `<p class='mt-3'>
      You are given a large integer represented as an integer array <code>digits</code>, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
    </p>
    <p class='mt-3'>
      Increment the large integer by one and return the resulting array of digits.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "digits = [1,2,3]",
      outputText: "[1,2,4]",
      explanation: "The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].",
    },
    {
      id: 2,
      inputText: "digits = [4,3,2,1]",
      outputText: "[4,3,2,2]",
      explanation: "The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2].",
    },
    {
      id: 3,
      inputText: "digits = [9]",
      outputText: "[1,0]",
      explanation: "The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0].",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= digits.length <= 100</code></li><li class='mt-2'><code>0 <= digits[i] <= 9</code></li><li class='mt-2'>digits does not contain any leading 0's.</li>",
  starterCode: "",
  handlerFunction: plusOneHandler,
  starterFunctionName: "",
  order: 11,
};

export default plusOne;
