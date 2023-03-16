import './SummonerPage.css';
import Icon from "../ components/Icon";
import MatchHistory from "../ components/MatchHistory";

const SummonerPage = () => {
  return (
    <>
      <header className='profile-header'>
        <a className='logo' href='#'><img src='' alt='Logo' /></a>
        <input className='summoner-search' type='text' />
        <div className='mode-toggle'>
          <div className='light-mode'>LM</div>
          <div className="divider">|</div>
          <div className='dark-mode'>DM</div>
        </div>
      </header>


      <main className=''>
        <section>
          <div className="container">
            <ul className='previous-ranks'>
              <li>S12 Master</li>
              <li>S11 Diamond</li>
              <li>S10 Diamond</li>
              <li>S9 Diamond</li>
              <li>S8 Diamond</li>
              <li>S7 Platinum</li>
              <li>S6 Platinum</li>
            </ul>
            <div className='profile-info'>
              <img src="" alt="summoner icon" />
              <div>
                <div>Name</div>
                <div>Ladder Rank</div>
                <button>Update</button>
              </div>
            </div>
            <nav className='profile-nav'>
              <a href="#">Overview</a>
            </nav>
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