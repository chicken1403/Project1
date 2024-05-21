export const romanToIntHandler = (s) => {
  try {
    const romanToInt = (s) => {
      const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
      };
      let result = 0;
      for (let i = 0; i < s.length; i++) {
        const current = romanValues[s[i]];
        const next = romanValues[s[i + 1]];
        if (next && current < next) {
          result += next - current;
          i++;
        } else {
          result += current;
        }
      }
      return result;
    };

    const tests = [
      { s: "III", expectedOutput: 3 },
      { s: "LVIII", expectedOutput: 58 },
      { s: "MCMXCIV", expectedOutput: 1994 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { s, expectedOutput } = tests[i];
      const result = romanToInt(s);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input "${s}". Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from romanToIntHandler: ", error);
    throw new Error(error);
  }
};

const romanToInt = {
  name: "roman-to-integer",
  id: 7,
  difficulty: "Easy",
  acceptance: "58.4%",
  title: "13. Roman to Integer",
  problemStatement: `<p class='mt-3'>
      Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.
    </p>
    <p class='mt-3'>
      Given a roman numeral, convert it to an integer.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "III"',
      outputText: "3",
      explanation: "III = 3.",
    },
    {
      id: 2,
      inputText: 's = "LVIII"',
      outputText: "58",
      explanation: "L = 50, V= 5, III = 3.",
    },
    {
      id: 3,
      inputText: 's = "MCMXCIV"',
      outputText: "1994",
      explanation: "M = 1000, CM = 900, XC = 90 and IV = 4.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= s.length <= 15</code></li><li class='mt-2'>s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')</li><li class='mt-2'>It is guaranteed that s is a valid roman numeral in the range [1, 3999]</li>",
  starterCode: "",
  handlerFunction: romanToIntHandler,
  starterFunctionName: "",
  order: 7,
};

export default romanToInt;

