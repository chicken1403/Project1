export const findPoisonedDurationHandler = (timeSeries, duration) => {
  try {
    const findPoisonedDuration = (timeSeries, duration) => {
      if (timeSeries.length === 0) return 0;
      let totalDuration = 0;
      for (let i = 1; i < timeSeries.length; i++) {
        totalDuration += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
      }
      return totalDuration + duration;
    };

    const tests = [
      { timeSeries: [1, 4], duration: 2, expectedOutput: 4 },
      { timeSeries: [1, 2], duration: 2, expectedOutput: 3 },
    ];

    for (let i = 0; i < tests.length; i++) {
      const { timeSeries, duration, expectedOutput } = tests[i];
      const result = findPoisonedDuration(timeSeries, duration);
      if (result !== expectedOutput) {
        throw new Error(
          `Test failed for input timeSeries=${timeSeries} and duration=${duration}. Expected ${expectedOutput}, but got ${result}.`
        );
      }
    }
    return true;
  } catch (error) {
    console.error("Error from findPoisonedDurationHandler: ", error);
    throw new Error(error);
  }
};

const findPoisonedDuration = {
  name: "find-poisoned-duration",
  id: 16,
  difficulty: "Medium",
  acceptance: "56.1%",
  title: "495. Teemo Attacking",
  problemStatement: `<p class='mt-3'>
      Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly <code>duration</code> seconds.
    </p>
    <p class='mt-3'>
      More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end <code>duration</code> seconds after the new attack.
    </p>
    <p class='mt-3'>
      You are given a non-decreasing integer array <code>timeSeries</code>, where <code>timeSeries[i]</code> denotes that Teemo attacks Ashe at second <code>timeSeries[i]</code>, and an integer <code>duration</code>.
    </p>
    <p class='mt-3'>
      Return the total number of seconds that Ashe is poisoned.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 'timeSeries = [1,4], duration = 2',
      outputText: "4",
      explanation: "Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.",
    },
    {
      id: 2,
      inputText: 'timeSeries = [1,2], duration = 2',
      outputText: "3",
      explanation: "Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.",
    },
  ],
  constraints: "<li class='mt-2'><code>1 <= timeSeries.length <= 10^4</code></li><li class='mt-2'><code>0 <= timeSeries[i], duration <= 10^7</code></li><li class='mt-2'>timeSeries is sorted in non-decreasing order.</li>",
  starterCode: "",
  handlerFunction: findPoisonedDurationHandler,
  starterFunctionName: "",
  order: 16,
};

export default findPoisonedDuration;
