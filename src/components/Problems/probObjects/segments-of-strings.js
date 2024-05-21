export const countSegmentsHandler = (s) => {
  try {
    const countSegments = (s) => {
      let count = 0;
      for (let i = 0; i < s.length; i++) {
        if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
          count++;
        }
      }
      return count;
    };

    const tests = [
      { s: "Hello, my name is John", expectedOutput: 5 },
      { s: "Hello", expectedOutput: 1 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { s, expectedOutput } = tests[i];
      const result = countSegments(s);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input "${s}". Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from countSegmentsHandler: ", error);
    throw new Error(error);
  }
};

const countSegments = {
  name: "count-segments",
  id: 15,
  difficulty: "Easy",
  acceptance: "38.8%",
  title: "434. Number of Segments in a String",
  problemStatement: `<p class='mt-3'>
      Given a string <code>s</code>, return the number of segments in the string.
    </p>
    <p class='mt-3'>
      A segment is defined to be a contiguous sequence of non-space characters.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "Hello, my name is John"',
      outputText: "5",
      explanation: 'The five segments are ["Hello,", "my", "name", "is", "John"].',
    },
    {
      id: 2,
      inputText: 's = "Hello"',
      outputText: "1",
      explanation: "There is only one segment in the string 'Hello'.",
    },
  ],
  constraints: "<li class='mt-2'><code>0 <= s.length <= 300</code></li><li class='mt-2'>s consists of lowercase and uppercase English letters, digits, or one of the following characters <code>!@#$%^&*()_+-=',.:</code>.</li><li class='mt-2'>The only space character in s is ' '.</li>",
  starterCode: "",
  handlerFunction: countSegmentsHandler,
  starterFunctionName: "",
  order: 15,
};

export default countSegments;

