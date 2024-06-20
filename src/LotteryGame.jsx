// import { useState } from "react";
// import "./Lottery.css"
// import { genTicket,sum } from "./helper";

// export default function LotteryGame() {
//     // let [ticket, setTicket] = useState([0, 0, 0]);
//     let [ticket, setTicket] = useState(genTicket(3));
//     let isWinning = sum(ticket) === 15;//if the sum is 15 then isWinning will set to True and vice versa

//     let buyTicket = () => {
//         setTicket(genTicket(3))
//     }
//     return (
//         <div>
//             <h1>This is lottery Game</h1>
//             <div className="ticket">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div>
//             <br></br>
//             <button onClick={buyTicket}>Buy new ticket</button>
//             <h3>{isWinning && "Congratulations, you won!"}</h3>
//         </div>
//     )
// }


import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";

export default function LotteryGame() {
    let [ticket, setTicket] = useState(genTicket(3));
    let [freeTicket, setFreeTicket] = useState(false);
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        if (isWinning) {
            setFreeTicket(true);
        } else {
            setTicket(genTicket(3));
            setFreeTicket(false);
        }
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>{isWinning ? "Claim Free Ticket" : "Buy New Ticket"}</button>
            {isWinning && <h3>Congratulations, you won!</h3>}
            {freeTicket && <p className="free-ticket-message">You got a free ticket!</p>}
        </div>
    );
}
