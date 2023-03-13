import './SummonerPage.css';
import Icon from "../ components/Icon";
import MatchHistory from "../ components/MatchHistory";

const SummonerPage = () => {
  return (
    <div className="grid-container">
      <div className="grid-item inner-grid-left">
        <div className='grid-item-left'>left 1</div>
        <div className='grid-item-left left1'>left 2</div>
        <div className='grid-item-left'>left 3</div>
        <div className='grid-item-left'>left 4</div>
        <div className='grid-item-left'>left 5</div>
      </div>
      <div className="grid-item inner-grid-right">
        <div className='matchHistory'>item 1</div>
        <div className='matchHistory'>item 2</div>
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
      </div>
    </div>

  )
}

export default SummonerPage;