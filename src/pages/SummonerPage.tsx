import './SummonerPage.css';
import './SummonerPageHeader.css';
import './SummonerPageProfile.css';

import PreviousRank from '../components/PreviousRank/PreviousRank';
import ChampPerformance from '../components/ChampPerformance/ChampPerformance';
import RankedPerformance from '../components/RankedPerformance/RankedPerformance';
import MatchHistoryLarge from '../components/MatchHistory/MatchHistoryLarge/MatchHistoryLarge';


import * as apiUtil from '../util/apiUtil';
import API_KEY from '../../api';
import { useState } from 'react';
import { summoner, rankedInfo } from '../interfaces';


const SummonerPage = () => {

  let [summonerSearch, setSummonerSearch] = useState<string>('');
  let [matchHistory, setMatchHistory] = useState<Array<any>>([]);

  let [summoner, setSummoner] = useState<summoner | undefined>();
  let [soloinfo, setSoloInfo] = useState<rankedInfo | undefined>();
  let [flexInfo, setFlexInfo] = useState<rankedInfo | undefined>();

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      // Get puuid from summoner name
      const summoner = await apiUtil.getSummoner(summonerSearch);
      const puuid = summoner.puuid;
      setSummoner(summoner);

      // Get ranked data then, 
      // store solo and flex info
      const rankedInfo = await apiUtil.getRankedInfo(summoner.id);
      setSoloInfo(rankedInfo[0]);
      setFlexInfo(rankedInfo[1]);
      console.log(soloinfo);

      // Get last 3 match ids from puuid
      const matchIds = await apiUtil.getMatchIds(puuid, 3);

      // Get the data of those last 3 games from their respective ids
      setMatchHistory(await apiUtil.getMatchData(matchIds));
      console.log(matchHistory);
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
                <PreviousRank season={'S12'} rank={'Challenger'} />
                <PreviousRank season={'S11'} rank={'Grandmaster'} />
                <PreviousRank season={'S10'} rank={'Master'} />
                <PreviousRank season={'S9'} rank={'Diamond'} />
                <PreviousRank season={'S8'} rank={'Platinum'} />
                <PreviousRank season={'S7'} rank={'Gold'} />
                <PreviousRank season={'S6'} rank={'Silver'} />
                <PreviousRank season={'S5'} rank={'Bronze'} />
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
                <RankedPerformance rankedInfo={soloinfo} queueType='Ranked Solo' />
                <RankedPerformance rankedInfo={flexInfo} queueType='Ranked Flex' />
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
                  { 
                    matchHistory.map(({ info, metaData}) => {
                      return (<MatchHistoryLarge  info={info} metaData={metaData} />);
                    })
                  }
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