import "./MatchHistoryLarge.css";
import "../MatchHistory.css";
import { secondsToMinuteSeconds } from "../../../util/textUtil";

interface MatchData {
  info: Info,
  metaData: MetaData,
  profileName: string | undefined;
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
  deaths: number,
  kills: number,
  assists: number,
  totalMinionsKilled: number,
  neutralMinionsKilled: number,
  visionScore: number,
  champLevel: number,
  championName: string,
  win: boolean,
  item0: number,
  item1: number,
  item2: number,
  item3: number,
  item4: number,
  item5: number,
  item6: number,
}

function timeConverter(unixTimeStamp: number) {
  const formatter = new Intl.RelativeTimeFormat('en');

  const diff = Date.now() - new Date(unixTimeStamp).valueOf();
  const time = formatter.format(Math.round(-diff / (1000 * 60 * 60 * 24)), 'days');

  return time;
}

function MatchHistoryLarge({ profileName, info, metaData }: MatchData) {
  const player = info.participants.find(p => {
    return p.summonerName === profileName;
  })
  
  console.log(player)
  const cs = (player && player.neutralMinionsKilled + player.totalMinionsKilled) || 0;
  const playerKda = player && ((player.kills + player.assists) / player.deaths).toFixed(2);
  const playerCSperMin = player && Math.round(cs / (info.gameDuration / 60) * 10) / 10;

  return (
    <div className={`matchHistory-large ${player?.win ? 'win' : 'loss'}`}>
      <div className="col-1">

        <div className="row-1">
          <div><b>Ranked Solo</b></div>
          <div>{timeConverter(info.gameCreation)}</div>
        </div>

        <div className="row-2">
          25 LP
        </div>

        <div className="row-3">
          <span className={`${player?.win ? 'textWin' : 'textLoss'}`}>{player?.win ? 'Win' : 'Loss'}</span>
          &nbsp;
          <span>{secondsToMinuteSeconds(info.gameDuration)}</span>
        </div>

      </div>
      <div className="col-2">
        <div className="champion">
          <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${player?.championName}.png`} />
          <div className="level">{player?.champLevel}</div>
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
        <div className="kda-totals">{player?.kills} / <span className="deaths">{player?.deaths}</span> / {player?.assists}</div>
        <div className="kda-ratio">{playerKda} KDA</div>
        <div className="large-cs">{cs} CS ({playerCSperMin})</div>
        <div className="vision-score">{player?.visionScore} vision</div>
      </div>
      <div className="col-4">
        <div className="items">
          <div className="main-items">
            <Item itemId={player?.item0} />
            <Item itemId={player?.item1} />
            <Item itemId={player?.item2} />
            <Item itemId={player?.item3} />
            <Item itemId={player?.item4} />
            <Item itemId={player?.item5} />
          </div>
          <div className="trinket">
            <Item itemId={player?.item6} />
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="teamlist">
          {
            info && info.participants.slice(0, info.participants.length / 2).map(participant => {
              return (
                <Summoner championName={participant?.championName} summonerName={participant.summonerName} key={participant.summonerId} />
              )
            })
          }
        </div>
        <div className="teamlist">
          {
            info && info.participants.slice(info.participants.length / 2).map(participant => {
              return (
                <Summoner championName={participant?.championName} summonerName={participant.summonerName} key={participant.summonerId} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

function Summoner({ championName, summonerName }: { championName: string, summonerName: string }) {
  return (
    <div className="summoner">
      <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/${championName}.png`} />
      <a>{summonerName}</a>
    </div>
  )
}

function Item({ itemId }: { itemId: number | undefined }) {
  return (
    <div className="item-container">
      {
        itemId !== 0 && <img className='item' src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/item/${itemId}.png`} />
      }
    </div>
  )
}

export default MatchHistoryLarge;