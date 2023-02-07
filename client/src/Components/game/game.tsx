import React from "react";
import { useRouter } from "next/router";
import RenderLine from "@/Components/game/renderLine";

interface BoardSquare {
  id: string;
  gameObj: {
    value: string | null;
  };
}

type GameBoard = BoardSquare[][];

export default function Game() {
  const router = useRouter();
  const { id } = router.query;
  const [gameBoard, setGameBoard] = React.useState<GameBoard>([]);
  const [progress, setProgress] = React.useState(0);
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  async function makeBoard() {
    const firstArray = [];
    const secondArray = [];
    for (let i = 1; i <= 10; i++) {
      firstArray.push({
        id: `T${i}`,
        gameObj: { value: null },
      });

      secondArray.push({
        id: `B${i}`,
        gameObj: { value: null },
      });
    }
    return [firstArray, secondArray];
  }

  React.useEffect(() => {
    makeBoard().then((res) => {
      setGameBoard(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-10">
      {gameBoard.length > 0 ? (
        <div>
          <RenderLine line={gameBoard[0]} colors={colors} />
          <RenderLine line={gameBoard[1]} colors={colors} />
          </div>
      ) : (
        <progress
          className="progress progress-primary w-56"
          value={progress}
          max="100"
        ></progress>      
      )}
    </div>
  );
}