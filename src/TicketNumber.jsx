import "./TicketNumber.css"
export default function TicketNumber({num}){
    console.log("num recived in ticketNumber.jsx",num);
    return <span className="TicketNum">{num}</span>;
}

