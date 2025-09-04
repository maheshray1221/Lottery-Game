import { useState } from "react";
import { randomTicket, addNumber } from "./helper";
import Ticket from "./Ticket";

export default function Game({ n = 4, winningSum = 25 }) {
  let [ticket, setTicket] = useState(randomTicket(n));
  console.log("🎟 Ticket generated in Game.jsx:", ticket); // ✅ check array

  let isWinner = addNumber(ticket) === winningSum;

  function buyTicket() {
    let newTicket = randomTicket(n);
    console.log("🎟 New Ticket generated:", newTicket); // ✅ check array
    setTicket(newTicket);
  }

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Generate</button>
      <h2>
        {isWinner
          ? "🎉 Congratulations, You Won The Game!"
          : "❌ You Lost The Game! Please Try Again.."}
      </h2>
    </div>
  );
}


