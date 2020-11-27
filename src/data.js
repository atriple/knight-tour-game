/**
 * Add your Level data to the `LEVEL_LIST`
 * This file also serves as utillity function to get necessary information of the level.
 */
const LEVEL_LIST = [
  [
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ],
  [
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1],
  ],
  [
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
  ],
  [
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
  ],
  [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ],
  [
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ],
];

/**
 * Efficient map-reduce function to get certain number in matrix
 */
const countNumberInMatrix = (matrix, n) => {
  matrix
    .map((row) =>
      row.reduce((total, current) => (current == n ? total + 1 : total), 0)
    )
    .reduce((total, current) => total + current);
};

const getLevelData = (index) => {
  const numberOfZero = countNumberInMatrix(LEVEL_LIST, 0);
  return { grid: LEVEL_LIST[index], goal: numberOfZero };
};

const getTotalLevel = () => {
  LEVEL_LIST.length;
};

export { getLevelData, getTotalLevel };
