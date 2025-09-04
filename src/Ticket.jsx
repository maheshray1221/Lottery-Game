import TicketNumber from './TicketNumber.jsx';
export default function Ticket({ ticket }){
    console.log("Ticket recived in ticket.jsx",ticket);
    return (
        <div>
        {ticket.map((num, idx) => (
            <TicketNumber key={idx} num={num} />
        ))}
        </div>
    );
}