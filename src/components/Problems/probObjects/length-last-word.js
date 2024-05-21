export const lengthOfLastWordHandler = (s) => {
  try {
    const lengthOfLastWord = (s) => {
      s = s.trim();
      const lastSpaceIndex = s.lastIndexOf(' ');
      return s.length - lastSpaceIndex - 1;
    };

    const tests = [
      { s: "Hello World", expectedOutput: 5 },
      { s: "   fly me   to   the moon  ", expectedOutput: 4 },
      { s: "luffy is still joyboy", expectedOutput: 6 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { s, expectedOutput } = tests[i];
      const result = lengthOfLastWord(s);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input "${s}". Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from lengthOfLastWordHandler: ", error);
    throw new Error(error);
  }
};

const lengthOfLastWord = {
  name: "length-of-last-word",
  id: 9,
  difficulty: "Easy",
  acceptance: "34.6%",
  title: "58. Length of Last Word",
  problemStatement: `<p class='mt-3'>
      Given a string <code>s</code> consisting of words and spaces, return the length of the last word in the string.
    </p>
    <p class='mt-3'>
      A word is a maximal substring consisting of non-space characters only.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "Hello World"',
      outputText: "5",
      explanation: "The last word is 'World' with length 5.",
    },
    {
      id: 2,
      inputText: 's = "   fly me   to   the moon  "',
      outputText: "4",
      explanation: "The last word is 'moon' with length 4.",
    },
    {
      id: 3,
      inputText: 's = "luffy is still joyboy"',
      outputText: "6",
      explanation: "The last word is 'joyboy' with length 6.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= s.length <= 10^4</code></li><li class='mt-2'>s consists of only English letters and spaces ' '.</li><li class='mt-2'>There will be at least one word in s.</li>",
  starterCode: "",
  handlerFunction: lengthOfLastWordHandler,
  starterFunctionName: "",
  order: 9,
};

export default lengthOfLastWord;

