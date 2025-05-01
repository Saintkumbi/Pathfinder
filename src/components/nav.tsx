
import { Select } from "../components/select";
import { usePathfinding } from "../hooks/usePathfinding";
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME, SPEEDS } from "../utils/constants";
import { resetGrid } from "../utils/resetMaze";
import { AlgorithmTypes, MazeType, SpeedType } from "../utils/types";
import { useTile } from "../hooks/useTile";
import { useState, MutableRefObject } from "react";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { useSpeed } from "../hooks/useSpeed";
import { PlayButton } from "./playButton";
import { runPathfindingAlgorithm } from "../utils/runPathfindingAlgorithm";
import { animatePath } from "../utils/animatePath";


import "./Nav.css"; 

export function Nav({ isVisualizationRunningRef }: { isVisualizationRunningRef: MutableRefObject<boolean> }) {
    const [isDisabled, setIsDisabled] = useState(false);
    const { maze, setMaze, grid, setGrid, isGraphVisualized, setIsGraphVisualized, algorithm, setAlgorithm } = usePathfinding();
    const { startTile, endTile } = useTile();
    const { speed, setSpeed } = useSpeed();

    const handleGenerateMaze = (maze: MazeType) => {
        if (maze === "NONE") {
            setMaze(maze);
            resetGrid({ grid, startTile, endTile });
            return;
        }
        setMaze(maze);
        setIsDisabled(true);
        runMazeAlgorithm({
            maze, grid, startTile, endTile, setIsDisabled, speed
        });
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(false);
    };

    const handleRunVisualizer = () => {
        if (isGraphVisualized) {
            setIsGraphVisualized(false);
            resetGrid({ grid: grid.slice(), startTile, endTile });
            return;
        }

        const { traversedTiles, path } = runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile,
        });

        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualizationRunningRef.current = true;
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
    };

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <h1 className="nav-title">Pathfinding Visualizer</h1>
                <div className="select-group">
                    <div className="select-wrapper">
                        <Select
                            label='Maze'
                            value={maze}
                            options={MAZES}
                            onChange={(e) => {
                                handleGenerateMaze(e.target.value as MazeType);
                            }}
                        />
                    </div>
                    <div className="select-wrapper">
                        <Select
                            label='Graph'
                            value={algorithm}
                            options={PATHFINDING_ALGORITHMS}
                            onChange={(e) => {
                                setAlgorithm(e.target.value as AlgorithmTypes);
                            }}
                        />
                    </div>
                    <div className="select-wrapper">
                        <Select
                            label='Speed'
                            value={speed}
                            options={SPEEDS}
                            onChange={(e) => {
                                setSpeed(parseInt(e.target.value) as SpeedType);
                            }}
                        />
                    </div>
                    <PlayButton
                        isDisabled={isDisabled}
                        isGraphVisualized={isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer}
                    />
                </div>
            </div>
        </nav>
    );
}
