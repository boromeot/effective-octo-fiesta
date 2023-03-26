import MatchHistoryLarge from "./MatchHistoryLarge/MatchHistoryLarge";
import "./MatchHistory.css";

interface MatchHistoryLargeProps {
  gameDuration : string, 
}

function MatchHistory({gameDuration} : MatchHistoryLargeProps) {
  return (
    <MatchHistoryLarge gameDuration={gameDuration}/>
  )
}

export default MatchHistory;