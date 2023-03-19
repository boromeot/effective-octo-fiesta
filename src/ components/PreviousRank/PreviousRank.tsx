import { useEffect, useState } from 'react';
import './PreviousRank.css';

const PreviousRank = ({ season, rank }: {season: string, rank : string}) => {
  const [color, setColor] = useState('');  
  useEffect(() => {
    switch (rank) {
      case 'Challenger': setColor('yellow'); break;
      case 'Grandmaster': setColor('red'); break;
      case 'Master': setColor('purple'); break;
      case 'Diamond': setColor('#b9f2ff'); break;
      case 'Platinum': setColor('rgb(78, 153, 150)'); break;
      case 'Gold': setColor('#FFD700'); break;    
      case 'Silver': setColor('#b9b9b9'); break;    
      case 'Bronze': setColor('#cd7f32'); break;    
      case 'Iron': setColor('#CBCDCD'); break;    
      default: break;
    }
  }, [])

  return (
    <div className='previous-rank'>
      <b className='previous-season-text'>{ season }</b>&nbsp; 
      <span style={{color: color}}>{ rank }</span>
    </div>
  )
}

export default PreviousRank;