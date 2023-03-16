import './SummonerPage.css';
import Icon from "../ components/Icon";
import MatchHistory from "../ components/MatchHistory";

const SummonerPage = () => {
  return (
    <>
      <header className='profile-header'>
        <a href='#'><img src='' alt='Logo' /></a>
        <input className='summoner-search' type='text' />
        <div className='mode-toggle'>
          <div className='light-mode'></div>
          <div className="divider"></div>
          <div className='dark-mode'></div>
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


        <section></section>
      </main>


    </>
  )
}

export default SummonerPage;