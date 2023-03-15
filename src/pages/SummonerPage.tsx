import './SummonerPage.css';
import Icon from "../ components/Icon";
import MatchHistory from "../ components/MatchHistory";

const SummonerPage = () => {
  return (
    <>
      <header className='content-header'>
        <div className='wrapper'>
          <form className='header-search'>
            <input className='header-searchbar' type="text" placeholder='Search Summoner'/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className='wrapper'>
          <section className='profile'>
            <div className='profile-icon'>
              <img src='https://picsum.photos/id/65/4912/3264' alt='profile summoner icon'/>
            </div>
            <div className='profile-info'>
              <ul className='profile-seasons'>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; Master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; Master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                <li className='profile-season'>
                  <b>S2022</b> &nbsp; master
                </li>
                
              </ul>
              <div className='profile-name'>
                Oxum 
              </div>
              <div className='profile-ladderrank'>
                Ladder Rank&nbsp; 
                <a href='#'>1,115</a>&nbsp;
                (0.124% of top)
              </div>
              <button className='profile-update'>
                Update
              </button>
              <div className='profile-lastupdated'>
                Last updated: 2 hours ago
              </div>
            </div>
          </section>
        </div>
        <div className='divider' />
        <div className='wrapper'>
          <nav className='profile-nav'>
            <button><b>Summary</b></button>
          </nav>
        </div>
      </header>
      <main className="grid-container">
        <div className="grid-item inner-grid-left">
          <div className='grid-item-left'>left 1</div>
          <div className='grid-item-left'>left 2</div>
          <div className='grid-item-left'>left 3</div>
          <div className='grid-item-left'>left 4</div>
          <div className='grid-item-left'>left 5</div>
        </div>
        <div className="grid-item inner-grid-right">
          <div className='matchHistory'>item 1</div>
          <div className='matchHistory'>item 2</div>
        </div>
      </main>
    </>

  )
}

export default SummonerPage;