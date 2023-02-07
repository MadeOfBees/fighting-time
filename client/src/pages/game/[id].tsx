import React from "react";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <div>
        <h1>Game Page</h1>
        <p>{id}</p>
        </div>
    );
    }
    