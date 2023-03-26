import './SummonerPage.css';
import './SummonerPageHeader.css';
import './SummonerPageProfile.css';

import PreviousRank from '../components/PreviousRank/PreviousRank';
import ChampPerformance from '../components/ChampPerformance/ChampPerformance';
import MatchHistory from '../components/MatchHistory/MatchHistory';

import { useState } from 'react';
import API_KEY from '../../api';

interface summoner {
  accountId: string,
  id: string,
  name: string,
  puuid: string,
  revisionDate: number,
  summonerLevel: number
}

interface rankedInfo {
  freshBlood: boolean,
  hotStreak: boolean,
  inactive: boolean,
  leagueId: string,
  leaguePoints: number,
  losses: number,
  queueType: string,
  rank: string,
  summonerId: string,
  summonerName: string,
  tier: string,
  veteran: boolean,
  wins: number
}

async function getRankedInfo(encryptedSummonerId: string) {
  try {
    const rankedData = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`);
    const rankedInfo = await rankedData.json();
    console.log('rankedInfo', rankedInfo)
    return rankedInfo;
  } catch (error) {
    return error;
  }
}

async function getSummoner(summonerName: string) {
  try {
    const summonerData = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);
    const summoner = await summonerData.json();
    return summoner;
  } catch (error) {
    return error;
  }
}

async function getMatchIds(puuid: string, count: number = 5) {
  try {
    const matchesData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}&api_key=${API_KEY}`);
    const matches = await matchesData.json();
    return matches;
  } catch (error) {
    return error;
  }
}

const SummonerPage = () => {

  let [summonerSearch, setSummonerSearch] = useState<string>('');
  let [matchHistory, setMatchHistory] = useState<Array<any>>([]);
  
  let [summoner, setSummoner] = useState<summoner | undefined>();
  let [rankedInfo, setRankedInfo] = useState<Array<rankedInfo> | undefined>();
  let [soloinfo, setSoloInfo] = useState<rankedInfo | undefined>();
  let [flexInfo, setFlexInfo] = useState<rankedInfo | undefined>();

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      // Get puuid from summoner name
      const summoner = await getSummoner(summonerSearch);
      const puuid = summoner.puuid;
      setSummoner(summoner);

      // Get ranked info
      const rankedInfo = await getRankedInfo(summoner.id);
      setSoloInfo(rankedInfo[0]);
      console.log(soloinfo);
      setFlexInfo(rankedInfo[1]);

      // Get last 5 match ids from puuid
      const matchIds = await getMatchIds(puuid, 5);

      // Get the data of those last 5 games from their respective ids
      const matches = matchIds.map(async (id: string) => {
        const matchData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`);
        const match = await matchData.json();
        return match;
      })

      const data = await Promise.all(matches);
      setMatchHistory(data);
      console.log(data);
    } catch (error) {
      console.error('Error Buddy:', error);
    }
  }

  return (
    <>
      <header className='profile-header'>
        <a className='logo' href='#'><img src='' alt='Logo' /></a>
        <form>
          <input className='summoner-search' onChange={e => setSummonerSearch(e.target.value)} type='text' placeholder='Search Summoner' />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <div className='mode-toggle'>
          <div className='light-mode'>LM</div>
          <div className="divider">|</div>
          <div className='dark-mode'>DM</div>
        </div>
      </header>


      <main className=''>
        <section>
          <div className="container">
            <div className="profile-container">
              <ul className='previous-ranks'> {/* UL should only render if the summoner has previous ranks*/}
                <PreviousRank season={'S12'}rank={'Challenger'}/>
                <PreviousRank season={'S11'}rank={'Grandmaster'}/>
                <PreviousRank season={'S10'}rank={'Master'}/>
                <PreviousRank season={'S9'}rank={'Diamond'}/>
                <PreviousRank season={'S8'}rank={'Platinum'}/>
                <PreviousRank season={'S7'}rank={'Gold'}/>
                <PreviousRank season={'S6'}rank={'Silver'}/>
                <PreviousRank season={'S5'}rank={'Bronze'}/>
              </ul>
              <div className='profile-info'>
                <img className='summoner-icon' src="https://picsum.photos/id/40/4106/2806" alt="summoner icon" />
                <div className='summoner-info'>
                  <div className='summoner-name'>{summoner?.name}</div>
                  <div className='summoner-rank'>Ladder Rank 1,080 (top 0.2788%)</div>
                  <button className='summoner-update'>Update</button>
                </div>
              </div>
              <nav className='profile-nav'>
                <a className='profile-link active' href="#">Overview</a>
                <a className='profile-link' href="#">Live Game</a>
              </nav>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="even-columns">
              <div className='overview-side'> {/* Left Column */} 
                <div className='ranked-container'>
                  <div>Ranked Solo</div>
                  {soloinfo && <div className='ranked-content'>
                    <img className='rank-img' src='https://picsum.photos/id/24/4855/1803'/>
                    <div className='ranked-info'>
                        <div className='rank-text'>
                          <span>{soloinfo?.tier}</span>
                          <span>{soloinfo?.leaguePoints} LP</span>
                        </div>
                        <div className='rank-wins'>
                          <span>{soloinfo?.wins}W {soloinfo?.losses}L</span>
                          <span>
                            {
                              soloinfo &&
                              Math.round((soloinfo?.wins / (soloinfo?.wins + soloinfo?.losses)) * 100)
                            }
                            % Win Rate</span>
                        </div>
                    </div>
                  </div>}
                </div>
                <div className='ranked-container'>
                  <div>Ranked Flex</div>
                  <div className='ranked-content'>
                    <img className='rank-img' src='https://picsum.photos/id/24/4855/1803'/>
                    <div className='ranked-info'>
                        <div className='rank-text'>
                          <span>Master</span>
                          <span>482 LP</span>
                        </div>
                        <div className='rank-wins'>
                          <span>119W 95L</span>
                          <span>56% Win Rate</span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className='champion-stats'>
                  <div className='champion-stats-title'>
                    <div><b>Champion Stats</b></div>
                    <div>All Ranked</div>
                  </div>
                  <ChampPerformance />
                  <ChampPerformance />
                  <ChampPerformance />
                  <ChampPerformance />
                  <ChampPerformance />
                  <ChampPerformance />
                  <ChampPerformance />
                </div>
                <div className='recently-played'>RECENTLY PLAYED</div>
              </div>
              <div className='overview-main'> {/* Right Column */} 
                <div className='match-search champion-stats-title'>
                  <div><b>Match History</b></div>
                  <input />
                </div>
                <div className='match-stats'></div>
                <div className='matches'>
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                  <MatchHistory />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SummonerPage;