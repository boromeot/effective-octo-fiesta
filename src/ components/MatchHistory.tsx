import "./MatchHistory.css";

const MatchHistory = () => {
  return (
    <div className="matchHistory">
      <div className="game">
        <div className="type">Ranked Solo</div>
        <div className="timestamp">a day ago</div>
        <div>-------</div>
        <div className="result">Victory</div>
        <div className="duration">35m 12s</div>
      </div>
      <div className="info">
        <div>
          <div className="champion">
            <div className="icon">
              <img src='https://picsum.photos/id/237/200/300' width={48} height={48}/>
            </div>
            <div className="spells">

            </div>
            <div className="runes"></div>
          </div>
          <div className="kda"></div>
          <div className="stats"></div>
        </div>
        <div>

        </div>
      </div>
      <div className="participants">participants</div>
    </div>
  )
}

export default MatchHistory;