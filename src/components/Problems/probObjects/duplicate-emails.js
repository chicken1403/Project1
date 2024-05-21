export const duplicateEmailsHandler = (emails) => {
  try {
    const duplicateEmails = (emails) => {
      const emailCounts = {};
      const duplicates = [];
      for (const email of emails) {
        emailCounts[email] = (emailCounts[email] || 0) + 1;
        if (emailCounts[email] === 2) {
          duplicates.push(email);
        }
      }
      return duplicates;
    };

    const tests = [
      {
        emails: ["a@b.com", "c@d.com", "a@b.com"],
        expectedOutput: ["a@b.com"],
      },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { emails, expectedOutput } = tests[i];
      const result = duplicateEmails(emails);
      if (!arraysAreEqual(result, expectedOutput)) {
        throw new Error(
          `Test failed for input ${emails}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from duplicateEmailsHandler: ", error);
    throw new Error(error);
  }
};

const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const duplicateEmails = {
  name: "duplicate-emails",
  id: 13,
  difficulty: "Easy",
  acceptance: "54.1%",
  title: "182. Duplicate Emails",
  problemStatement: `<p class='mt-3'>
      Write a SQL query to find all duplicate emails in a table named <code>Person</code>.
    </p>
    <p class='mt-3'>
      Person table:
    </p>
    <pre class='mt-3'>
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
    </pre>
    <p class='mt-3'>
      Result table:
    </p>
    <pre class='mt-3'>
+---------+
| Email   |
+---------+
| a@b.com | 
+---------+
    </pre>
    <p class='mt-3'>
      Explanation: a@b.com is repeated two times.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "Person table: [[1, 'a@b.com'], [2, 'c@d.com'], [3, 'a@b.com']]",
      outputText: "Result table: [['a@b.com']]",
      explanation: "a@b.com is repeated two times.",
    },
  ],
  constraints: "<li class='mt-2'>It is guaranteed that the email field is not NULL.</li>",
  starterCode: "",
  handlerFunction: duplicateEmailsHandler,
  starterFunctionName: "",
  order: 13,
};

export default duplicateEmails;
