import "./MatchHistory.css";

const MatchHistory = () => {

  const small = (
    <div></div>
  )


  return (
    <div className="matchHistory">
      <div className="matchResult">
        <div>WIN </div>
        <div className="matchType">
          <b>Ranked Solo</b>
          <span>21 hours ago</span>
        </div>
      </div>
      <div className="matchDetails">
        <div className="champDetails">
          <img src="https://picsum.photos/id/30/1280/901"/>
          <div className="champSums">
            <img className="champSum" src="https://picsum.photos/id/31/1280/901"/>
            <img className="champSum" src="https://picsum.photos/id/31/1280/901"/>
          </div>
        </div>
        <div className="matchStats"></div>
      </div>
    </div>
  )
}

function TeamMate({ src }: {src : string}) {
  return (
    <div className="teammate">
      <img className="teammate-img" src={src} />
      <div className="teammate-name">WHY PP HARD 808</div>
    </div>
  )
}

function Spell({ src }: {src : string}) {
  return (
    <img src={src} />
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