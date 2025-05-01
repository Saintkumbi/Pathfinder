// PlayButton.tsx
import React from "react";
import { MouseEventHandler } from "react";
import "./PlayButton.css"; 

interface PlayButtonProps {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}

export function PlayButton({
  handleRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: PlayButtonProps) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleRunVisualizer}
      className="Btn"
      data-text={isGraphVisualized ? "Reset" : "Play"}
      aria-label={isGraphVisualized ? "Reset Visualization" : "Start Visualization"}
    >
      {/* The text is handled via CSS ::before pseudo-element */}
    </button>
  );
}


