import React from "react";
import { useRouter } from "next/router";
import Game from "@/Components/game";


export default function GamePage() {
    const [time, setTime] = React.useState(2);
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div>
            {time > 0 ? <h1>Loading...</h1> : <Game />}
        </div>
    );
}