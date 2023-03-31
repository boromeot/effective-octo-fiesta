import "./MatchHistoryLarge.css";
import "../MatchHistory.css";
import { secondsToMinuteSeconds } from "../../../util/textUtil";
import { MatchData } from "../../../interfaces";


function timeConverter(unixTimeStamp: number) {
  const formatter = new Intl.RelativeTimeFormat('en');

  const diff = Date.now() - new Date(unixTimeStamp).valueOf();
  const time = formatter.format(Math.round(-diff / (1000 * 60 * 60 * 24)), 'days');

  return time;
}

const IdtoSumSpell: {[key: number]: string} = {
  1 : 'SummonerBoost',
  3 : 'SummonerExhaust',
  4 : 'SummonerFlash',
  6 : 'SummonerHaste',
  7 : 'SummonerHeal',
  11 : 'SummonerSmite',
  12 : 'SummonerTeleport',
  13 : 'SummonerMana',
  14 : 'SummonerDot',
  21 : 'SummonerBarrier',
  30 : 'SummonerPoroRecall',
  31 : 'SummonerPoroThrow',
  32 : 'SummonerSnowball',
  39 : 'SummonerSnowURFSnowball_Mark',
  54 : 'Summoner_UltBookPlaceholder',
  55 : 'Summoner_UltBookSmitePlaceholder',
}

const IdtoRune: {[key: number]: string} = {
  8000 : '7201_Precision.png',
  8100 : '7200_Domination.png',
  8200 : '7202_Sorcery.png',
  8300 : '7203_Whimsy.png',
  8400 : '7204_Resolve.png',
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
          <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${IdtoSumSpell[player?.summoner1Id || 1]}.png`} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${IdtoSumSpell[player?.summoner2Id || 1]}.png`} />
        </div>
        <div className="runes">
          <img src={`https://ddragon.canisback.com/img/perk-images/Styles/${IdtoRune[player?.perks.styles[0].style || 8000]}`} />
          <img src={`https://ddragon.canisback.com/img/perk-images/Styles/${IdtoRune[player?.perks.styles[1].style || 8000]}`} />
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