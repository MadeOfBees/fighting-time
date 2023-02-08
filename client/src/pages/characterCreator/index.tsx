import React from "react";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

export default function characterCreator() {
  const [divColor, setDivColor] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const playerColor = localStorage.getItem("playerColor");
      if (playerColor) {
        setDivColor(playerColor);
      } else {
        setDivColor("red");
      }
    }
  }, []);

  function setCurrentPlayerColor(color: string) {
    localStorage.setItem("playerColor", color);
    setDivColor(color);
  }

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "white",
    "gray",
  ];

  return (
    <div>
      <Navbar />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Character Creator</h1>
        <div className="flex flex-row flex-wrap justify-center items-center mt-6">
          {colors.map((color) => (
            <button
              key={color}
              className="w-20 h-20 m-2 rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => {
                setCurrentPlayerColor(color);
              }}
            ></button>
          ))}
        </div>
        <div
          className="w-20 h-40 mt-10"
          style={{ backgroundColor: divColor }}
        ></div>
      </main>
      <Footer />
    </div>
  );
}
