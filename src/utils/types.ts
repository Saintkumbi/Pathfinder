
export type AlgorithmTypes = "DIJKSTRA" | "A_STAR" | "DFS" | "BFS";

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export interface MazeSelectType {
    name: string
    value: string
}

export interface AlgorithmSelectTypes {
    name: string
    value: AlgorithmTypes;
}

export type GridType = TileType[][];

export type TileType = {
    row: number;
    col: number;

    isStart: boolean;
    isEnd: boolean;

    parent: null | TileType;

    isWall: boolean;
    isPath: boolean;

    isTraversed: boolean;

    distance: number;
}

export type SpeedType = 2 | 1 | 0.5;

export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}


// RRT algo 
export interface RRTGrid {
    rows: number;
    cols: number;
    obstacles: RRTObstacle[];
  }
  
  export interface RRTObstacle {
    row: number;
    col: number;
    width: number;
    height: number;
  }
  
  export interface RRTPosition {
    row: number;
    col: number;
  }
  
  export interface RRTNode {
    position: RRTPosition;
    parent?: RRTNode; // parent pointer in the RRT tree
    cost: number;     // cost from the start
  }
  
  export interface RRTOptions {
    stepSize: number;       // how far to move on each "steer"
    maxIterations: number;  // how many times we attempt to add new nodes
    radius: number;         // neighborhood radius for rewiring
    goalThreshold?: number; // distance threshold for "reaching" the goal
  }