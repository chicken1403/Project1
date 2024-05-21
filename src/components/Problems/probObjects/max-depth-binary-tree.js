export const maxDepthHandler = (root) => {
  try {
    class TreeNode {
      constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
      }
    }

    const maxDepth = (root) => {
      if (!root) return 0;
      const leftDepth = maxDepth(root.left);
      const rightDepth = maxDepth(root.right);
      return Math.max(leftDepth, rightDepth) + 1;
    };

    const tests = [
      {
        root: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
        expectedOutput: 3,
      },
      { root: new TreeNode(1, null, new TreeNode(2)), expectedOutput: 2 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { root, expectedOutput } = tests[i];
      const result = maxDepth(root);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input ${root}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from maxDepthHandler: ", error);
    throw new Error(error);
  }
};

const maxDepth = {
  name: "max-depth-binary-tree",
  id: 5,
  difficulty: "Easy",
  acceptance: "71.6%",
  title: "104. Maximum Depth of Binary Tree",
  problemStatement: `<p class='mt-3'>
      Given the <code>root</code> of a binary tree, return its maximum depth.
    </p>
    <p class='mt-3'>
      A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: "root = [3,9,20,null,null,15,7]",
      outputText: "3",
      explanation: "",
    },
    {
      id: 2,
      inputText: "root = [1,null,2]",
      outputText: "2",
      explanation: "",
    },
  ],
  constraints: "<li class='mt-2'>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li class='mt-2'><code>-100 <= Node.val <= 100</code></li>",
  starterCode: "",
  handlerFunction: maxDepthHandler,
  starterFunctionName: "",
  order: 5,
};

export default maxDepth;

