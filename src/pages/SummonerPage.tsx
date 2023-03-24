import './SummonerPage.css';
import './SummonerPageHeader.css';
import './SummonerPageProfile.css';
import PreviousRank from '../components/PreviousRank/PreviousRank';
import ChampPerformance from '../components/ChampPerformance/ChampPerformance';
import MatchHistory from '../components/MatchHistory/MatchHistory';

const SummonerPage = () => {
  return (
    <>
      <header className='profile-header'>
        <a className='logo' href='#'><img src='' alt='Logo' /></a>
        <input className='summoner-search' type='text' placeholder='Search Summoner'/>
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
                  <div className='summoner-name'>NAME</div>
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