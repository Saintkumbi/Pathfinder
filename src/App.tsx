import { PathfindingProvider } from "./context/pathfindingContext";
import { TileProvider } from "./context/tileContext";
import { SpeedProvider } from "./context/speedContext";
import { Grid } from "./components/grid";
import {useRef} from "react";
import { Nav } from "./components/nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef}/>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
