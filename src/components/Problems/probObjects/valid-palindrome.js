export const isPalindromeHandler = (s) => {
  try {
    const isPalindrome = (s) => {
      s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
      let left = 0,
        right = s.length - 1;
      while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
      }
      return true;
    };

    const tests = [
      { s: "A man, a plan, a canal: Panama", expectedOutput: true },
      { s: "race a car", expectedOutput: false },
      { s: " ", expectedOutput: true },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { s, expectedOutput } = tests[i];
      const result = isPalindrome(s);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input "${s}". Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from isPalindromeHandler: ", error);
    throw new Error(error);
  }
};

const isPalindrome = {
  name: "palindrome",
  id: 6,
  difficulty: "Easy",
  acceptance: "39.1%",
  title: "125. Valid Palindrome",
  problemStatement: `<p class='mt-3'>
      A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
    </p>
    <p class='mt-3'>
      Given a string <code>s</code>, return <code>true</code> if it is a palindrome, or <code>false</code> otherwise.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "A man, a plan, a canal: Panama"',
      outputText: "true",
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    {
      id: 2,
      inputText: 's = "race a car"',
      outputText: "false",
      explanation: '"raceacar" is not a palindrome.',
    },
    {
      id: 3,
      inputText: 's = " "',
      outputText: "true",
      explanation:
        's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= s.length <= 2 * 10^5</code></li><li class='mt-2'>s consists only of printable ASCII characters.</li>",
  starterCode: "",
  handlerFunction: isPalindromeHandler,
  starterFunctionName: "",
  order: 6,
};

export default isPalindrome;
