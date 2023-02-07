import React from "react";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

export default function characterCreator() {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="text-6xl font-bold text-center">
            Character Creator
        </h1>
      </main>
      <Footer />
    </div>
  );
}
