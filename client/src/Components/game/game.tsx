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
  const [p1Color, setP1Color] = React.useState("red");
  const [p2Color, setP2Color] = React.useState("blue");

  React.useEffect(() => {
    const playerColor = localStorage.getItem("playerColor");
    if (playerColor) {
      setP1Color(playerColor);
    }
  }, []);


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
    const newSecondArray = secondArray.map((square, index) => {
      if (index === 2) {
        return {
          id: square.id,
          gameObj: { value: "0" },
        };
      } else if (index === 6) {
        return {
          id: square.id,
          gameObj: { value: "1" },
        };
      } else {
        return square;
      }
    });

    return [firstArray, newSecondArray];
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
          <RenderLine line={gameBoard[0]} colors={[p1Color, p2Color]} />
          <RenderLine line={gameBoard[1]} colors={[p1Color, p2Color]} />
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
