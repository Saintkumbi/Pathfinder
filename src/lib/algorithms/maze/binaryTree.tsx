import { MAX_COL, MAX_ROW } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { destroyWall } from "../../../utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (disabled: boolean) => void,
  speed: SpeedType
) => {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROW * MAX_COL);
  for (const row of grid) {
    for (const node of row) {
      if (node.row % 2 === 0 || node.col % 2 === 0) {
        if (!isEqual(node, startTile) && !isEqual(node, endTile)) {
          node.isWall = true; 
        }
      }
    }
  }

  for (let r = 1; r < MAX_ROW; r += 2) {
    for (let c = 1; c < MAX_COL; c += 2) {
      if (r === MAX_ROW - 2 && c === MAX_COL - 2) {
        continue;
      } else if (r === MAX_ROW - 2) {
        await destroyWall(grid, r, c, 1, speed);
      } else if (c === MAX_COL - 2) {
        await destroyWall(grid, r, c, 0, speed);
      } else {
        await destroyWall(grid, r, c, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false); 
};