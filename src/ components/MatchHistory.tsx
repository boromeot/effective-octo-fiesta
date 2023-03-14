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
              <span className="level">17</span>
            </div>
            <div className="spells">
              <Spell src='https://picsum.photos/id/57/2448/3264' />
              <Spell src='https://picsum.photos/id/58/1280/853' />
            </div>
            <div className="runes">
              <Rune src="https://picsum.photos/id/59/2464/1632" />
              <Rune src="https://picsum.photos/id/56/2880/1920" />
            </div>
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

function Spell({ src }: {src : string}) {
  return (
    <div className="spell">
      <img src={src} width={22} height={22} />
    </div>
  )
}

function Rune({ src }: {src : string}) {
  return (
    <div className="rune">
      <img src={src} width={22} height={22} />
    </div>
  )
}

export default MatchHistory;