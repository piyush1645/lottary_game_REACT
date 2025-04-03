import './App.css'
import { Lottery } from './lottery'
import Ticket from './ticket'
import TicketNumber from './ticketNumber'
import { sum } from './helper'
function App() {
  let WinCondition=(ticket)=>{
    return sum(ticket)===15;
  }
  return (
    <>
     <Lottery n={3} WinCondition={WinCondition}/>
    

     
    </>
  )
}

export default App
