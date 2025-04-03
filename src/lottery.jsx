import { useState } from "react";
import { genLottery, sum } from "./helper";
import Ticket from "./ticket";
function Lottery({n=3,WinCondition}) {
    let [ticket, setTicket] = useState(genLottery(n));
    let isWinning =WinCondition(ticket);

    function buyTicket() {
        return setTicket(genLottery(n));
    }
    return (
        <div>
            <h1>lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <br /><br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulation,you won!!!"}</h3>

        </div>
    );

}

export { Lottery };