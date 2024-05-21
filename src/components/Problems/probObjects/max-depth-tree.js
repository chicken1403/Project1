class Node {
  constructor(val = 0, children = []) {
    this.val = val;
    this.children = children;
  }
}

export const maxDepthNaryTreeHandler = (root) => {
  try {
    const maxDepthNaryTree = (root) => {
      if (!root) return 0;

      let maxDepth = 0;

      for (const child of root.children) {
        maxDepth = Math.max(maxDepth, maxDepthNaryTree(child));
      }

      return maxDepth + 1;
    };

    // Test cases
    const tests = [
      {
        root: new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]),
        expectedOutput: 3,
      },
      {
        root: new Node(1, [
          new Node(2),
          new Node(3, [new Node(6), new Node(7, [new Node(11, [new Node(14)])])]),
          new Node(4, [new Node(8, [new Node(12)])]),
          new Node(5, [new Node(9, [new Node(13)]), new Node(10)]),
        ]),
        expectedOutput: 5,
      },
    ];

    // Testing
    for (const { root, expectedOutput } of tests) {
      const result = maxDepthNaryTree(root);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input root=${JSON.stringify(root)}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from maxDepthNaryTreeHandler: ", error);
    throw new Error(error);
  }
};

const maxDepthNaryTree = {
  name: "max-depth-n-ary-tree",
  id: 21,
  difficulty: "Easy",
  acceptance: "69.2%",
  title: "559. Maximum Depth of N-ary Tree",
  problemStatement: `<p class='mt-3'>
      Given a n-ary tree, find its maximum depth.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'root = [1,null,3,2,4,null,5,6]',
      outputText: '3',
      explanation: 'The maximum depth of the tree is 3.',
    },
    {
      id: 2,
      inputText:
        'root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]',
      outputText: '5',
      explanation: 'The maximum depth of the tree is 5.',
    },
  ],
  constraints: "<li class='mt-2'><code>0 <= treeNodes.length <= 10^4</code></li>",
  starterCode: "",
  handlerFunction: maxDepthNaryTreeHandler,
  starterFunctionName: "",
  order: 21,
};

export default maxDepthNaryTree;
