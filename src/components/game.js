import { useState } from "react";
import { Records } from "./records";
const Game = () => {
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const winPoint = () => {
    setHighScore(points + 1 > highScore ? points + 1 : highScore);
    setPoints(points + 1);
  };

  const loseGame = () => {
    setPoints(0);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: 80,
          alignItems: "center",
        }}
      >
        <h1>Points: {points}</h1>
        <h1>HighScore: {highScore}</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Records winPoint={winPoint} loseGame={loseGame} />
      </div>
    </div>
  );
};

export { Game };
