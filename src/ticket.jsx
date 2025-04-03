import TicketNumber from "./ticketNumber";
import './ticket.css';
export default function Ticket({ticket}){
    return (
        <div className="ticket">
            <p>ticket</p>
            {ticket.map((num,idx)=>(
                <TicketNumber num={num} key={idx}/>
            ))}
        </div>
    );
}