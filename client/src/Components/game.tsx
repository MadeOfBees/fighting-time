import React from "react";
import { useRouter } from "next/router";

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
      <div className="flex flex-row-reverse">
        {gameBoard[0]?.map((square) => (
          <div
            key={square.id}
            className={`w-20 h-40 ${
              square.gameObj.value === null
                ? "bg-white"
                : colors[Number(square.gameObj.value)]
            }`}
          ></div>
        ))}
      </div>
      <div className="flex flex-row-reverse">
        {gameBoard[1]?.map((square) => (
          <div
            key={square.id}
            className={`w-20 h-40 ${
              square.gameObj.value === null
                ? "bg-white"
                : colors[Number(square.gameObj.value)]
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
