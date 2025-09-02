import { useState } from "react";
export function Game(){
    let [Ticket,setTicket] = useState("000");
    let [msg,setMsg] = useState("");
    let randomTicket = ()=>{
        let newTicket =  Math.floor(Math.random()*900)+100;
        setTicket(newTicket);
        let sum = 0;
       
        while(newTicket>0){
            let lastDigit = newTicket%10;
            sum = sum+Math.floor(lastDigit);
            newTicket = newTicket/10;
        }
        console.log(sum);
        //win Condition
        if (sum == 15) {
            setMsg("Congratulations , You Won The Game");
        }else{
            setMsg("You Loss The Game! Plese Try Again..");
        }
    }
    
    return(
       
        <>
        <h1>Lottery Game</h1>
        <br />
        <h2>{msg}</h2>
        <h3>Lottery Ticket = {Ticket}</h3>
        <button onClick={randomTicket}>Generate</button>
        </>
    );
}