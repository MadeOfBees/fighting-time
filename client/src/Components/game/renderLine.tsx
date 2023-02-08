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

const RenderLine: React.FC<RenderLineProps> = ({ line, colors }) => {
  const isBottom = line[0].id[0] === "B";
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {line.map((square) => {
        const color = square.gameObj.value
          ? colors[parseInt(square.gameObj.value)]
          : "white";
        return (
          <div
            key={square.id}
            className={`w-20 h-40 ${
              isBottom ? "border-b-4" : ""
            } border-orange-500`}
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
};

export default RenderLine;
