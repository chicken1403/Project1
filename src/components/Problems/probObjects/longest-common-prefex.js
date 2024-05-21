export const longestCommonPrefixHandler = (strs) => {
  try {
    const longestCommonPrefix = (strs) => {
      if (strs.length === 0) return "";
      let prefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, prefix.length - 1);
          if (prefix === "") return "";
        }
      }
      return prefix;
    };

    const tests = [
      { strs: ["flower","flow","flight"], expectedOutput: "fl" },
      { strs: ["dog","racecar","car"], expectedOutput: "" },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { strs, expectedOutput } = tests[i];
      const result = longestCommonPrefix(strs);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input "${strs}". Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from longestCommonPrefixHandler: ", error);
    throw new Error(error);
  }
};

const longestCommonPrefix = {
  name: "longest-common-prefix",
  id: 8,
  difficulty: "Easy",
  acceptance: "38.3%",
  title: "14. Longest Common Prefix",
  problemStatement: `<p class='mt-3'>
      Write a function to find the longest common prefix string amongst an array of strings.
    </p>
    <p class='mt-3'>
      If there is no common prefix, return an empty string "".
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'strs = ["flower","flow","flight"]',
      outputText: '"fl"',
      explanation: "",
    },
    {
      id: 2,
      inputText: 'strs = ["dog","racecar","car"]',
      outputText: '""',
      explanation: "There is no common prefix among the input strings.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= strs.length <= 200</code></li><li class='mt-2'><code>0 <= strs[i].length <= 200</code></li><li class='mt-2'>strs[i] consists of only lowercase English letters.</li>",
  starterCode: "",
  handlerFunction: longestCommonPrefixHandler,
  starterFunctionName: "",
  order: 8,
};

export default longestCommonPrefix;
