import { rankedInfo } from "../../interfaces";
import './RankedPerformance.css';

interface RankedPerformanceProps {
  rankedInfo : rankedInfo | undefined,
  queueType : string,
}

function RankedPerformance({ rankedInfo, queueType} : RankedPerformanceProps) {
  const roman2decimal: {[key: string]: string} = {
    'I' : '1',
    'II' : '2',
    'III' : '3',
    'IV' : '4',
    'V': '5'
  }

  return (
    <div className='ranked-container'>
      <div>{queueType}</div>
      {rankedInfo && <div className='ranked-content'>
        <img className='rank-img' src='https://picsum.photos/id/24/4855/1803' />
        <div className='ranked-info'>
          <div className='rank-text'>
            <span className='rank-tier'>{rankedInfo?.tier} {roman2decimal[rankedInfo?.rank]}</span>
            <span>{rankedInfo?.leaguePoints} LP</span>
          </div>
          <div className='rank-wins'>
            <span>{rankedInfo?.wins}W {rankedInfo?.losses}L</span>
            <span>
              {
                rankedInfo &&
                Math.round((rankedInfo?.wins / (rankedInfo?.wins + rankedInfo?.losses)) * 100)
              }
              % Win Rate</span>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default RankedPerformance;