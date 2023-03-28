import "./MatchHistoryLarge.css";
import "../MatchHistory.css";
import { secondsToMinuteSeconds } from "../../../util/textUtil";

interface MatchHistoryLargeProps {
  matchData: MatchData,
}

interface MatchData {
  info: Info,
  metaData: MetaData,
}

interface Info {
  gameCreation: number,
  gameDuration: number,
  gameEndTimestamp: number,
  gameId: number,
  gameMode: string,
  gameName: string,
  gameStartTimestamp: number,
  gameType: string,
  gameVersion: string,
  mapId: number,
  participants: Array<string>,
  platformId: string,
  queueId: number,
  teams: Array<Object>,
  tournamentCode: string,
}

interface MetaData {
  dataVersion: string,
  matchId: string,
  participants: Array<string>,
}

function MatchHistoryLarge({ matchData } : MatchHistoryLargeProps) {
  console.log('matchdata', matchData,)
  return (
    <div className="matchHistory-large">
      <div className="col-1">
  
        <div className="row-1">
          <div><b>Ranked Solo</b></div>
          <div>3 days ago </div>
        </div>
        
        <div className="row-2">
          25 LP
        </div>
  
        <div className="row-3">
          <span>WIN</span>
          &nbsp;
          <span>{ secondsToMinuteSeconds(matchData.info.gameDuration) }</span>
        </div>
  
      </div>
      <div className="col-2">
        <div className="champion">
          <img src="https://picsum.photos/id/34/3872/2592"/>
          <div className="level">16</div>
        </div>
        <div className="summoner-spell">
          <img src="https://picsum.photos/id/35/3872/2592" />
          <img src="https://picsum.photos/id/35/3872/2592" />
        </div>
        <div className="runes">
          <img src="https://picsum.photos/id/37/3872/2592" />
          <img src="https://picsum.photos/id/37/3872/2592" />
        </div>
      </div>
      <div className="col-3">
        <div className="kda-totals">2 / <span className="deaths">3</span> / 1</div>
        <div className="kda-ratio">1.00 KDA</div>
        <div className="large-cs">122 CS (6.3)</div>
        <div className="vision-score">9 vision</div>
      </div>
      <div className="col-4">
        <div className="items">
          <div className="main-items">
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
            <Item src="https://picsum.photos/id/34/1280/901" />
          </div>
          <div className="trinket">
            <Item src="https://picsum.photos/id/34/1280/901" />
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="teamlist">
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
        </div>
        <div className="teamlist">
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
          <Summoner src="https://picsum.photos/id/35/1280/901" />
        </div>
      </div>
    </div>
  )
} 

function Summoner({ src }: {src : string}) {
  return (
    <div className="summoner">
      <img src={ src } />
      <a>Name</a>
    </div>
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

export default MatchHistoryLarge;