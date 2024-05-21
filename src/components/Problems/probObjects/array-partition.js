export const arrayPairSumHandler = (nums) => {
  try {
    const arrayPairSum = (nums) => {
      nums.sort((a, b) => a - b);
      let sum = 0;
      for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
      }
      return sum;
    };

    // Test cases
    const tests = [
      { nums: [1, 4, 3, 2], expectedOutput: 4 },
      { nums: [6, 2, 6, 5, 1, 2], expectedOutput: 9 },
    ];

    // Testing
    for (const { nums, expectedOutput } of tests) {
      const result = arrayPairSum(nums);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input nums=${JSON.stringify(
            nums
          )}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from arrayPairSumHandler: ", error);
    throw new Error(error);
  }
};

const arrayPairSum = {
  name: "array-pair-sum",
  id: 22,
  difficulty: "Easy",
  acceptance: "70.1%",
  title: "561. Array Partition I",
  problemStatement: `<p class='mt-3'>
      Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'nums = [1,4,3,2]',
      outputText: '4',
      explanation:
        'The optimal pairing is (1, 2) and (3, 4). min(1, 2) + min(3, 4) = 1 + 3 = 4.',
    },
    {
      id: 2,
      inputText: 'nums = [6,2,6,5,1,2]',
      outputText: '9',
      explanation:
        'The optimal pairing is (1, 2), (2, 5), and (6, 6). min(1, 2) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.',
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= n <= 10^4</code></li>",
  starterCode: "",
  handlerFunction: arrayPairSumHandler,
  starterFunctionName: "",
  order: 22,
};

export default arrayPairSum;

