// Place your level configuration to LEVEL_LIST
// also serves as utillity function to get necessary information of the level.

/**
 * Value definition of the grid
 * 0 - Empty
 * 1 - Blocked
 * 2 - Visited
 */
const GRID_STATE = {
  EMPTY: 0,
  BLOCKED: 1,
  VISITED: 2,
};

/**
 * Add your Level data to the `LEVEL_LIST`
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
  return matrix
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
  return LEVEL_LIST.length;
};

export { getLevelData, getTotalLevel, GRID_STATE };
