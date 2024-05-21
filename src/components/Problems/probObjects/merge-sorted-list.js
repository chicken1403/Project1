class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

export const mergeTwoListsHandler = (l1, l2) => {
  try {
    const mergeTwoLists = (l1, l2) => {
      let dummy = new ListNode();
      let current = dummy;
      while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
        } else {
          current.next = l2;
          l2 = l2.next;
        }
        current = current.next;
      }
      if (l1 !== null) {
        current.next = l1;
      } else {
        current.next = l2;
      }
      return dummy.next;
    };

    const convertArrayToList = (arr) => {
      if (arr.length === 0) return null;
      let head = new ListNode(arr[0]);
      let current = head;
      for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
      }
      return head;
    };

    const convertListToArray = (head) => {
      let arr = [];
      while (head !== null) {
        arr.push(head.val);
        head = head.next;
      }
      return arr;
    };

    const tests = [
      {
        list1: convertArrayToList([1, 2, 4]),
        list2: convertArrayToList([1, 3, 4]),
        expectedOutput: convertArrayToList([1, 1, 2, 3, 4, 4]),
      },
      { list1: convertArrayToList([]), list2: convertArrayToList([]), expectedOutput: null },
      { list1: convertArrayToList([]), list2: convertArrayToList([0]), expectedOutput: convertArrayToList([0]) },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { list1, list2, expectedOutput } = tests[i];
      const result = mergeTwoLists(list1, list2);
      if (!listsAreEqual(result, expectedOutput)) {
        throw new Error(
          `Test failed for input ${list1} and ${list2}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from mergeTwoListsHandler: ", error);
    throw new Error(error);
  }
};

const listsAreEqual = (l1, l2) => {
  while (l1 !== null && l2 !== null) {
    if (l1.val !== l2.val) return false;
    l1 = l1.next;
    l2 = l2.next;
  }
  return l1 === null && l2 === null;
};

const mergeTwoLists = {
  name: "merge-two-sorted-lists",
  id: 10,
  difficulty: "Easy",
  acceptance: "56.5%",
  title: "21. Merge Two Sorted Lists",
  problemStatement: `<p class='mt-3'>
      You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.
    </p>
    <p class='mt-3'>
      Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
    </p>
    <p class='mt-3'>
      Return the head of the merged linked list.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'list1 = [1,2,4], list2 = [1,3,4]',
      outputText: '[1,1,2,3,4,4]',
      explanation: "",
    },
    {
      id: 2,
      inputText: 'list1 = [], list2 = []',
      outputText: '[]',
      explanation: "",
    },
    {
      id: 3,
      inputText: 'list1 = [], list2 = [0]',
      outputText: '[0]',
      explanation: "",
    },
  ],
  constraints: "<li class='mt-2'>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li><li class='mt-2'><code>-100 <= Node.val <= 100</code></li><li class='mt-2'>Both list1 and list2 are sorted in non-decreasing order.</li>",
  starterCode: "",
  handlerFunction: mergeTwoListsHandler,
  starterFunctionName: "",
  order: 10,
};

export default mergeTwoLists;
