class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export const diameterOfBinaryTreeHandler = (root) => {
  try {
    const diameterOfBinaryTree = (root) => {
      let diameter = 0;

      const dfs = (node) => {
        if (!node) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Update diameter
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return the height of the current node
        return 1 + Math.max(leftHeight, rightHeight);
      };

      dfs(root);

      return diameter;
    };

    // Test cases
    const tests = [
      {
        root: new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)),
        expectedOutput: 3,
      },
      {
        root: new TreeNode(1, new TreeNode(2), null),
        expectedOutput: 1,
      },
    ];

    // Testing
    for (const { root, expectedOutput } of tests) {
      const result = diameterOfBinaryTree(root);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input root=${JSON.stringify(root)}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from diameterOfBinaryTreeHandler: ", error);
    throw new Error(error);
  }
};

const diameterOfBinaryTree = {
  name: "diameter-of-binary-tree",
  id: 20,
  difficulty: "Easy",
  acceptance: "50.2%",
  title: "543. Diameter of Binary Tree",
  problemStatement: `<p class='mt-3'>
      Given the root of a binary tree, return the length of the diameter of the tree.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'root = [1,2,3,4,5]',
      outputText: '3',
      explanation: '3 is the length of the path [4,2,1,3] or [5,2,1,3].',
    },
    {
      id: 2,
      inputText: 'root = [1,2]',
      outputText: '1',
      explanation: 'There is only one node, so the diameter is 1.',
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= treeNodes.length <= 10^4</code></li>",
  starterCode: "",
  handlerFunction: diameterOfBinaryTreeHandler,
  starterFunctionName: "",
  order: 20,
};

export default diameterOfBinaryTree;
