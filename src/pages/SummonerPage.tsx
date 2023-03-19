import './SummonerPage.css';
import PreviousRank from '../ components/PreviousRank/PreviousRank';

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
                {/* <PreviousRank season={'S4'}rank={'Iron'}/>
                <PreviousRank season={'S3'}rank={'Iron'}/>
                <PreviousRank season={'S2'}rank={'Iron'}/>
                <PreviousRank season={'S1'}rank={'Iron'}/> */}
              </ul>
              <div className='profile-info'>
                <img className='summoner-icon' src="https://picsum.photos/id/40/4106/2806" alt="summoner icon" />
                <div className='summoner-info'>
                  <div className='summoner-name'>Oxum</div>
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
              <div> {/* Left Column */} 
                <div className='ranked-solo'></div>
                <div className='ranked-flex'></div>
                <div className='champion-stats'></div>
                <div className='recently-played'></div>
              </div>
              <div> {/* Right Column */} 
                <div className='match-search'></div>
                <div className='match-stats'></div>
                <div className='matches'>
                  <div className="match"></div>
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