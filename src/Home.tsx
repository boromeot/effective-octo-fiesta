import { FC, useState } from "react";
import API_KEY from "../api";

const Home:FC = () => {
  let [summonerName, setSummonerName] = useState<string>('');
  let [matchHistory, setMatchHistory] = useState<Array<any>>([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      // Get puuid from summoner name
      const summonerData = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);
      const summoner = await summonerData.json();
      const puuid = summoner.puuid;

      // Get last 5 match ids from puuid
      const matchesData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${API_KEY}`);
      const matchIds = await matchesData.json();

      // Get the data of those last 5 games from their respective ids
      const matches = matchIds.map(async (id: string) => {
        const matchData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`);
        const match = await matchData.json();
        return match;
      })

      const data = await Promise.all(matches);
      setMatchHistory(data);
    } catch (error) {
      console.error('Error Buddy:', error);
    }
  }

  return (
    <>
      <div>
        {
          matchHistory && 
          matchHistory.map(match => {
            return (
              <div key={match.info.gameId}>
                {match.info.gameId}
              </div>
            )
          })
        }    
      </div>
      <form>
        <input type="text" onChange={e => setSummonerName(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Home;