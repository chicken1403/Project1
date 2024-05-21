export const climbStairsHandler = (n) => {
  try {
    const climbStairs = (n) => {
      if (n === 1) return 1;
      let dp = new Array(n + 1).fill(0);
      dp[1] = 1;
      dp[2] = 2;
      for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
      }
      return dp[n];
    };

    const tests = [
      { n: 2, expectedOutput: 2 },
      { n: 3, expectedOutput: 3 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { n, expectedOutput } = tests[i];
      const result = climbStairs(n);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input ${n}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from climbStairsHandler: ", error);
    throw new Error(error);
  }
};

const climbStairs = {
  name: "climbing-stairs",
  id: 12,
  difficulty: "Easy",
  acceptance: "49.7%",
  title: "70. Climbing Stairs",
  problemStatement: `<p class='mt-3'>
      You are climbing a staircase. It takes <code>n</code> steps to reach the top.
    </p>
    <p class='mt-3'>
      Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "n = 2",
      outputText: "2",
      explanation: "There are two ways to climb to the top: 1 step + 1 step or 2 steps.",
    },
    {
      id: 2,
      inputText: "n = 3",
      outputText: "3",
      explanation: "There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= n <= 45</code></li>",
  starterCode: "",
  handlerFunction: climbStairsHandler,
  starterFunctionName: "",
  order: 12,
};

export default climbStairs;
