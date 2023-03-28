import "./MatchHistoryLarge.css";
import "../MatchHistory.css";
import { secondsToMinuteSeconds } from "../../../util/textUtil";

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
  participants: Array<Participant>,
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

interface Participant {
  summonerName: string,
  summonerId: string,
}

function timeConverter(unixTimeStamp: number) {
  const formatter = new Intl.RelativeTimeFormat('en');

  const diff = Date.now() - new Date(unixTimeStamp).valueOf();
  const time = formatter.format(Math.round(-diff / (1000 * 60 * 60 * 24)), 'days');

  return time;
}

function MatchHistoryLarge({ info, metaData }: MatchData) {
  return (
    <div className="matchHistory-large">
      <div className="col-1">

        <div className="row-1">
          <div><b>Ranked Solo</b></div>
          <div>{timeConverter(info.gameCreation)}</div>
        </div>

        <div className="row-2">
          25 LP
        </div>

        <div className="row-3">
          <span>WIN</span>
          &nbsp;
          <span>{secondsToMinuteSeconds(info.gameDuration)}</span>
        </div>

      </div>
      <div className="col-2">
        <div className="champion">
          <img src="https://picsum.photos/id/34/3872/2592" />
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
          {
            info && info.participants.slice(0, info.participants.length / 2).map(participant => {
              return (
                <Summoner src="https://picsum.photos/id/35/1280/901" summonerName={participant.summonerName} key={participant.summonerId} />
              )
            })
          }
        </div>
        <div className="teamlist">
          {
            info && info.participants.slice(info.participants.length / 2).map(participant => {
              return (
                <Summoner src="https://picsum.photos/id/35/1280/901" summonerName={participant.summonerName} key={participant.summonerId} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Summoner({ src, summonerName }: { src: string, summonerName: string }) {
  return (
    <div className="summoner">
      <img src={src} />
      <a>{summonerName}</a>
    </div>
  )
}

function Item({ src }: { src: string | undefined }) {
  return (
    <div className="item-container">
      {
        src && <img className='item' src={src} />
      }
    </div>
  )
}

export default MatchHistoryLarge;