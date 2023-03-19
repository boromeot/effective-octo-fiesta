import './ChampPerformance.css';

const ChampPerformance = () => {
  return (
    <div className='ChampPerformance'>
      <img className='ChampPerformance-img' src='https://picsum.photos/id/169/2500/1662'/>
      <div className='ChampPerformance-stats'>
        <div><b>Draven</b></div>
        <div className='Champ-kda'>
          <div>3.65 KDA</div>
          <div className='Champ-kda-split'>
            <span>7.1</span>
            <span>3.6</span>
            <span>5.9</span>
          </div>
        </div>
        <div className='Champ-games'>
          <div>63%</div>
          <div className='Champ-games-played'>113 games</div>
        </div>
      </div>
    </div>
  )
}

export default ChampPerformance;