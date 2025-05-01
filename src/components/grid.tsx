import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { Tile } from "./tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({ isVisualizationRunningRef }: { isVisualizationRunningRef: MutableRefObject<boolean> }) {
    const { grid, setGrid } = usePathfinding();
    const [isMousedDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(false);
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        if (isMousedDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center p-4">
            <div
                className={twMerge(
                    // Base classes for centering
                    "flex flex-col items-center justify-center",
                    // Set width to 90% of viewport width
                    "w-[90vw]",
                    // Set height to maintain aspect ratio (39:98 ≈ 40% of width)
                    "h-[36vw]"
                )}
            >
                {grid.map((r, rowIndex) => (
                    <div key={rowIndex} className="flex w-full flex-1">
                        {r.map((tile, tileIndex) => {
                            const { row, col, isEnd, isStart, isTraversed, isWall, isPath } = tile;
                            return (
                                <Tile
                                    key={tileIndex}
                                    row={tile.row}
                                    col={tile.col}
                                    isEnd={isEnd}
                                    isStart={isStart}
                                    isPath={isPath}
                                    isTraversed={isTraversed}
                                    isWall={isWall}
                                    handleMouseDown={() => handleMouseDown(row, col)}
                                    handleMouseUp={() => handleMouseUp(row, col)}
                                    handleMouseEnter={() => handleMouseEnter(row, col)}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;