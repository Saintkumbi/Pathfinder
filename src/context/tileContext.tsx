import { TileType } from "../utils/types";
import { createContext, ReactNode, useState} from "react";
import {START_TILE_CONFIGUTRATION, END_TILE_CONFIGUTRATION} from "../utils/constants.ts"


interface TileContextInterface{
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(
    undefined
)

export const TileProvider = ({children}: {children: ReactNode}) => {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGUTRATION)
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGUTRATION)

    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile,
            }}
        >
            {children}
        </TileContext.Provider>
    )
}