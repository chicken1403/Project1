export const convertToBase7Handler = (num) => {
  try {
    const convertToBase7 = (num) => {
      if (num === 0) return "0";
      let isNegative = false;
      if (num < 0) {
        isNegative = true;
        num = -num;
      }
      let result = '';
      while (num > 0) {
        result = (num % 7) + result;
        num = Math.floor(num / 7);
      }
      return isNegative ? '-' + result : result;
    };

    const tests = [
      { num: 100, expectedOutput: "202" },
      { num: -7, expectedOutput: "-10" },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { num, expectedOutput } = tests[i];
      const result = convertToBase7(num);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input num=${num}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from convertToBase7Handler: ", error);
    throw new Error(error);
  }
};

const convertToBase7 = {
  name: "convert-to-base-7",
  id: 19,
  difficulty: "Easy",
  acceptance: "50.8%",
  title: "504. Base 7",
  problemStatement: `<p class='mt-3'>
      Given an integer <code>num</code>, return a string of its base 7 representation.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'num = 100',
      outputText: '"202"',
      explanation: 'Base 7 representation of 100 is "202".',
    },
    {
      id: 2,
      inputText: 'num = -7',
      outputText: '"-10"',
      explanation: 'Base 7 representation of -7 is "-10".',
    },
  ],
  constraints: "<li class='mt-2'><code>-10^7 <= num <= 10^7</code></li>",
  starterCode: "",
  handlerFunction: convertToBase7Handler,
  starterFunctionName: "",
  order: 19,
};

export default convertToBase7;
