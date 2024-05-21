export const pascalsTriangleHandler = (numRows) => {
  try {
    const generatePascalsTriangle = (numRows) => {
      if (numRows === 0) return [];
      const triangle = [[1]];
      for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const newRow = [1];
        for (let j = 1; j < prevRow.length; j++) {
          newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        newRow.push(1);
        triangle.push(newRow);
      }
      return triangle;
    };

    const tests = [
      { numRows: 5, expectedOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] },
      { numRows: 1, expectedOutput: [[1]] },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { numRows, expectedOutput } = tests[i];
      const result = generatePascalsTriangle(numRows);
      if (!arraysAreEqual(result, expectedOutput)) {
        throw new Error(
          `Test failed for input ${numRows}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from pascalsTriangleHandler: ", error);
    throw new Error(error);
  }
};

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!arraysAreEqual(arr1[i], arr2[i])) return false;
  }
  return true;
};

const pascalsTriangle = {
  name: "pascals-triangle",
  id: 4,
  difficulty: "Easy",
  acceptance: "58.5%",
  title: "118. Pascal's Triangle",
  problemStatement: `<p class='mt-3'>
      Given an integer <code>numRows</code>, return the first <code>numRows</code> of Pascal's triangle.
    </p>
    <p class='mt-3'>
      In Pascal's triangle, each number is the sum of the two numbers directly above it.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "numRows = 5",
      outputText: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
      explanation: "",
    },
    {
      id: 2,
      inputText: "numRows = 1",
      outputText: "[[1]]",
      explanation: "",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= numRows <= 30</code></li>",
  starterCode: "",
  handlerFunction: pascalsTriangleHandler,
  starterFunctionName: "",
  order: 4,
};

export default pascalsTriangle;

