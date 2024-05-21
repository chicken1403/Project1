export const findWordsHandler = (words) => {
  try {
    const findWords = (words) => {
      const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
      const result = [];
      for (const word of words) {
        const lowercaseWord = word.toLowerCase();
        let isInOneRow = true;
        for (const row of rows) {
          if (lowercaseWord.split('').every(char => row.includes(char))) {
            result.push(word);
            break;
          }
        }
      }
      return result;
    };

    const tests = [
      { words: ["Hello","Alaska","Dad","Peace"], expectedOutput: ["Alaska","Dad"] },
      { words: ["omk"], expectedOutput: [] },
      { words: ["adsdf","sfd"], expectedOutput: ["adsdf","sfd"] },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { words, expectedOutput } = tests[i];
      const result = findWords(words);
      if (JSON.stringify(result) !== JSON.stringify(expectedOutput)) {
        throw new Error(
          `Test failed for input ${JSON.stringify(words)}. Expected ${JSON.stringify(expectedOutput)}, but got ${JSON.stringify(result)}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from findWordsHandler: ", error);
    throw new Error(error);
  }
};

const findWords = {
  name: "find-words",
  id: 17,
  difficulty: "Easy",
  acceptance: "53.1%",
  title: "500. Keyboard Row",
  problemStatement: `<p class='mt-3'>
      Given an array of strings <code>words</code>, return the words that can be typed using letters of the alphabet on only one row of American keyboard.
    </p>
    <p class='mt-3'>
      In the American keyboard:
      <ul>
        <li>the first row consists of the characters "qwertyuiop",</li>
        <li>the second row consists of the characters "asdfghjkl", and</li>
        <li>the third row consists of the characters "zxcvbnm".</li>
      </ul>
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'words = ["Hello","Alaska","Dad","Peace"]',
      outputText: '["Alaska","Dad"]',
      explanation: 'Words "Alaska" and "Dad" can be typed using letters on only one row of American keyboard.',
    },
    {
      id: 2,
      inputText: 'words = ["omk"]',
      outputText: '[]',
      explanation: 'The word "omk" cannot be typed using letters on only one row of American keyboard.',
    },
    {
      id: 3,
      inputText: 'words = ["adsdf","sfd"]',
      outputText: '["adsdf","sfd"]',
      explanation: 'Both words "adsdf" and "sfd" can be typed using letters on only one row of American keyboard.',
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= words.length <= 20</code></li><li class='mt-2'><code>1 <= words[i].length <= 100</code></li><li class='mt-2'>words[i] consists of English letters (both lowercase and uppercase).</li>",
  starterCode: "",
  handlerFunction: findWordsHandler,
  starterFunctionName: "",
  order: 17,
};

export default findWords;
