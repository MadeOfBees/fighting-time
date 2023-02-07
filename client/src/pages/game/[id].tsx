import React from "react";
import { useRouter } from "next/router";
import Game from "@/Components/game/game";

export default function GamePage() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-10">
      {progress < 100 ? (
        <progress
          className="progress progress-primary w-56 mt-28"
          value={progress}
          max="100"
        ></progress>
      ) : (
        <Game />
      )}
    </div>
  );
}
