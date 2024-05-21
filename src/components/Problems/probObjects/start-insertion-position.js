export const searchInsertPositionHandler = (nums, target) => {
  try {
    const searchInsertPosition = (nums, target) => {
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
          return mid;
        } else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
    };

    const tests = [
      { nums: [1, 3, 5, 6], target: 5, expectedOutput: 2 },
      { nums: [1, 3, 5, 6], target: 2, expectedOutput: 1 },
      { nums: [1, 3, 5, 6], target: 7, expectedOutput: 4 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { nums, target, expectedOutput } = tests[i];
      const result = searchInsertPosition(nums, target);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input nums=${nums} and target=${target}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from searchInsertPositionHandler: ", error);
    throw new Error(error);
  }
};

const searchInsertPosition = {
  name: "search-insert-position",
  id: 14,
  difficulty: "Easy",
  acceptance: "43.9%",
  title: "35. Search Insert Position",
  problemStatement: `<p class='mt-3'>
      Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    </p>
    <p class='mt-3'>
      You must write an algorithm with <code>O(log n)</code> runtime complexity.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [1,3,5,6], target = 5",
      outputText: "2",
      explanation: "5 is found at index 2.",
    },
    {
      id: 2,
      inputText: "nums = [1,3,5,6], target = 2",
      outputText: "1",
      explanation: "2 is not found, but it should be inserted at index 1.",
    },
    {
      id: 3,
      inputText: "nums = [1,3,5,6], target = 7",
      outputText: "4",
      explanation: "7 is not found, but it should be inserted at index 4.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li><li class='mt-2'><code>-10^4 <= nums[i] <= 10^4</code></li><li class='mt-2'>nums contains distinct values sorted in ascending order.</li><li class='mt-2'><code>-10^4 <= target <= 10^4</code></li>",
  starterCode: "",
  handlerFunction: searchInsertPositionHandler,
  starterFunctionName: "",
  order: 14,
};

export default searchInsertPosition;

