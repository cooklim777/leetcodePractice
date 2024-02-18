/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  let heightDifferent = [0];
  for (let i = 1; i < heights.length; i++) {
    let diff = heights[i] - heights[i - 1];
    if (diff <= 0) {
      heightDifferent.push(0);
    } else {
      heightDifferent.push(diff);
    }
  }
  let ladderArray = new Array(ladders).fill(0);
  console.log(heightDifferent);
  for (let i = 1; i < heightDifferent.length; i++) {
    let jump = heightDifferent[i];
    if (jump > 0) {
      if (jump > ladderArray[0]) {
        let j = ladderArray.length - 1;
        while (j >= 0 && ladderArray[j] > jump) {
          j--;
        }
        bricks -= ladderArray.shift();
        ladderArray.splice(j, 0, jump);
      } else {
        bricks -= jump;
      }
      console.log(jump, bricks);
      if (bricks < 0) return i - 1;
    }
  }
  return heights.length - 1;
};

console.log(
  furthestBuilding(
    (heights = [4, 12, 2, 7, 3, 18, 20, 3, 19]),
    (bricks = 10),
    (ladders = 2)
  )
);
