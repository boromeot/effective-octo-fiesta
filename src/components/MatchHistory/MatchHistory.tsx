import MatchHistoryLarge from "./MatchHistoryLarge/MatchHistoryLarge";
import "./MatchHistorySmall.css";
import "./MatchHistory.css";


const MatchHistory = () => {
  const small = (
    <div className="matchHistory-small">
    <div className="matchResult">
      <div>WIN </div>
      <div className="matchType">
        <b>Ranked Solo</b>
        <span>21 hours ago</span>
      </div>
    </div>
    <div className="matchDetails">
      <div className="champDetails">
        <img className="champIcon" src="https://picsum.photos/id/30/1280/901"/>
        <div className="champSums">
          <img className="champSum" src="https://picsum.photos/id/31/1280/901"/>
          <img className="champSum" src="https://picsum.photos/id/31/1280/901"/>
        </div>
        <div className="champRunes">
          <img className="champRune" src="https://picsum.photos/id/32/1280/901"/>
          <img className="champRune" src="https://picsum.photos/id/32/1280/901"/>
        </div>
      </div>
      <div className="matchStats">
        <div>
          <div className="items">
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="" />
          </div>
        </div>
        <div className="KDA-container">
          <div className="KDA">6 / <span className="deaths">1</span> / 2</div>
          <div className="KDA-ratio">8.00 KDA</div>
          <div className="cs"><span className="cs-total">125 </span> CS (7.9)</div>
        </div>
      </div>
    </div>
    </div>
  )


  return (
    <>
      <MatchHistoryLarge />
    </>
  )
}

function Item({ src }: {src : string | undefined}) {
  return (
    <div className="item-container">
      {
        src && <img className='item' src={ src }/>
      }
    </div>
  )
}

export default MatchHistory;