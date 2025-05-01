
import { createGrid } from "../utils/helpers.ts";
import { AlgorithmTypes, MazeType, GridType } from "../utils/types.ts";
import {ReactNode, createContext, useState } from "react";
import { START_TILE_CONFIGUTRATION, END_TILE_CONFIGUTRATION } from "../utils/constants.ts";


interface PathfindingContextInterface {

    /**
    * Type of Pathfinding Algorithm (eg. Dijkstra, A*)
    * @type: AlgorithmTypes -> See types.ts for more info
    */
    algorithm: AlgorithmTypes;

    /**
     * Sets the chosen pathfinder algorithm we would like to run
     * @returns: void
     */
    setAlgorithm: (algorithm: AlgorithmTypes) => void;

    /**
     * The Maze type (eg. BinaryTree, RecuriveTree)
     * @type: MazeType -> See types.ts for more info
     */
    maze: MazeType;

    /**
     * Initilizes the Maze 
     * @returns: void
     */
    setMaze: (mazeType: MazeType) => void;

    /**
     * The the Grid type being visualized (eg. 20x20, 40x40)
     * @type: GridType -> See types.ts for more info
     */
    grid: GridType;

    /**
     * Initilizes the Grid 
     * @returns: void
     */
    setGrid: (setGrid: GridType) => void;

    /**
     * Is the Graph Visualized or not
     */
    isGraphVisualized: boolean;

    /**
     * Initilizes the Grid 
     * @returns: void
     */
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;

}

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({children}: {children: ReactNode}) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmTypes>("BFS");
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGUTRATION, END_TILE_CONFIGUTRATION));
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathfindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized,

            }}
            >{children}
        </PathfindingContext.Provider>
    )
}