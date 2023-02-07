import React from "react";

interface BoardSquare {
  id: string;
  gameObj: {
    value: string | null;
  };
}

interface RenderLineProps {
  line: BoardSquare[];
  colors: string[];
}

type GameBoard = BoardSquare[][];

const RenderLine: React.FC<RenderLineProps> = ({ line, colors }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {line.map((square) => {
        const color = square.gameObj.value
          ? colors[Math.floor(Math.random() * colors.length)]
          : "gray";
        return (
          <div
            key={square.id}
            className="w-20 h-40"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
};

export default RenderLine;
