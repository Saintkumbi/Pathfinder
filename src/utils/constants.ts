import { MazeType, MazeSelectType, SpeedSelectType, AlgorithmSelectTypes} from "./types";


export const MAX_ROW = 35;
export const MAX_COL = 99;


export const START_TILE_CONFIGUTRATION = {
    row: 1,
    col: 1,
    isEnd: false,
    isWall: false, 
    isPath: false, 
    distance: 0,
    isStart: false,
    isTraversed: false,
    parent: null,
};

export const END_TILE_CONFIGUTRATION = {
    row: MAX_ROW - 2,
    col: MAX_COL - 2,
    isEnd: false,
    isWall: false, 
    isPath: false, 
    distance: 0,
    isStart: false,
    isTraversed: false,
    parent: null,
};


export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-white";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-white";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-yellow-600";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-purple-600";


export const MAZES: MazeSelectType[] = [
    {name: "No Maze", value: "NONE"},
    {name: "Binary Tree", value: "BINARY_TREE"},
    {name: "Recursive Divison", value: "RECURSIVE_DIVISION"},

]

export const PATHFINDING_ALGORITHMS: AlgorithmSelectTypes[] = [
    {name: "Dijkstra", value: "DIJKSTRA"},
    {name: "A-Star", value: "A_STAR"},
    {name: "Bread First Search", value: "BFS"},
    {name: "Depth First Search", value: "DFS"},
]

export const SPEEDS: SpeedSelectType[] = [
    {name:"Normal", value: 1},
    {name:"Fast", value: 0.5},
]

export const SLEEP_TIME = 8;

export const EXTENDED_SLEEP_TIME = 50;