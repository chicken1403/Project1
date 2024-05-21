export const fibHandler = (n) => {
  try {
    const fib = (n) => {
      if (n === 0) return 0;
      if (n === 1) return 1;
      let prev1 = 0, prev2 = 1;
      let current;
      for (let i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
      }
      return current;
    };

    const tests = [
      { n: 2, expectedOutput: 1 },
      { n: 3, expectedOutput: 2 },
      { n: 4, expectedOutput: 3 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { n, expectedOutput } = tests[i];
      const result = fib(n);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input n=${n}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from fibHandler: ", error);
    throw new Error(error);
  }
};

const fib = {
  name: "fib",
  id: 18,
  difficulty: "Easy",
  acceptance: "69.1%",
  title: "509. Fibonacci Number",
  problemStatement: `<p class='mt-3'>
      The Fibonacci numbers, commonly denoted F(n), form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
    </p>
    <p class='mt-3'>
      Given n, calculate F(n).
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'n = 2',
      outputText: '1',
      explanation: 'F(2) = F(1) + F(0) = 1 + 0 = 1.',
    },
    {
      id: 2,
      inputText: 'n = 3',
      outputText: '2',
      explanation: 'F(3) = F(2) + F(1) = 1 + 1 = 2.',
    },
    {
      id: 3,
      inputText: 'n = 4',
      outputText: '3',
      explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3.',
    },
  ],
  constraints: "<li class='mt-2'><code>0 <= n <= 30</code></li>",
  starterCode: "",
  handlerFunction: fibHandler,
  starterFunctionName: "",
  order: 18,
};

export default fib;

