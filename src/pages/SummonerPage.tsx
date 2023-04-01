import './SummonerPage.css';
import './SummonerPageHeader.css';
import './SummonerPageProfile.css';

import PreviousRank from '../components/PreviousRank/PreviousRank';
import ChampPerformance from '../components/ChampPerformance/ChampPerformance';
import RankedPerformance from '../components/RankedPerformance/RankedPerformance';
import MatchHistoryLarge from '../components/MatchHistory/MatchHistoryLarge/MatchHistoryLarge';

import * as apiUtil from '../util/apiUtil';
import { useState, useEffect, useCallback } from 'react';
import { summoner, rankedInfo } from '../interfaces';

import { useSearchParams } from 'react-router-dom';


const SummonerPage = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  let [matchHistory, setMatchHistory] = useState<Array<any>>([]);

  let [summoner, setSummoner] = useState<summoner | undefined>();
  let [soloinfo, setSoloInfo] = useState<rankedInfo | undefined>();
  let [flexInfo, setFlexInfo] = useState<rankedInfo | undefined>();

  function handleChange(e: any) {
    setSearchParams({ name: e.target.value});
  }

  const fetchData = async (name: string) => {
    try {
      const summoner = await apiUtil.getSummoner(name);
      const puuid = summoner.puuid;
      setSummoner(summoner);
  
      const rankedInfo = await apiUtil.getRankedInfo(summoner.id);
      setSoloInfo(rankedInfo[0]);
      setFlexInfo(rankedInfo[1]);
  
      const matchIds = await apiUtil.getMatchIds(puuid, 3);
  
      setMatchHistory(await apiUtil.getMatchData(matchIds));
    } catch (error) {
      console.error('Error Buddy:', error);
    }
  }
  
  useEffect(() => {
    fetchData(searchParams.get('name') || '404');
  }, []);
  
  const handleSubmit: any = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(searchParams.get('name') || '404');
  }, [searchParams]);

  return (
    <>
      <header className='profile-header'>
        <a className='logo' href='#'><img src='' alt='Logo' /></a>
        <form>
          <input className='summoner-search' onChange={handleChange} type='text' placeholder='Search Summoner' />
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
              <div className='profile-info'>
                <img className='summoner-icon' src={`http://ddragon.leagueoflegends.com/cdn/13.6.1/img/profileicon/${summoner?.profileIconId}.png`} alt="summoner icon" />
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
                      return (<MatchHistoryLarge  profileName={summoner?.name} info={info} metaData={metaData} />);
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