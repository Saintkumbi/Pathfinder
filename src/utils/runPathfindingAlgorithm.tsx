
import { aStar } from "../lib/Pathfinding/AStar";
import { bfs } from "../lib/Pathfinding/BFS";
import { dfs } from "../lib/Pathfinding/DFS";
import { dijkstra } from "../lib/Pathfinding/dijkstra";
import { AlgorithmTypes, GridType, TileType } from "../utils/types";

export const runPathfindingAlgorithm = ({
    algorithm,
    grid,
    startTile,
    endTile,

}: {
    algorithm: AlgorithmTypes;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
}) => {
    switch (algorithm) {
        case "BFS":
            return bfs(grid, startTile, endTile);
        case "DFS":
            return dfs(grid, startTile, endTile);
        case "DIJKSTRA":
            return dijkstra(grid, startTile, endTile);
        case "A_STAR":
            return aStar(grid, startTile, endTile);
        default:
            return bfs(grid, startTile, endTile);
    }
}

