import API_KEY from "../../api";

export async function getRankedInfo(encryptedSummonerId: string) {
  try {
    const rankedData = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`);
    const rankedInfo = await rankedData.json();
    console.log('rankedInfo', rankedInfo)
    return rankedInfo;
  } catch (error) {
    return error;
  }
}

export async function getSummoner(summonerName: string) {
  try {
    const summonerData = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);
    const summoner = await summonerData.json();
    return summoner;
  } catch (error) {
    return error;
  }
}

export async function getMatchIds(puuid: string, count: number = 5) {
  try {
    const matchesData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}&api_key=${API_KEY}`);
    const matches = await matchesData.json();
    return matches;
  } catch (error) {
    return error;
  }
}

export async function getMatchData(matchIds: Array<string>) {
    const matches = matchIds.map(async (id: string) => {
      const matchData = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${API_KEY}`);
      const match = await matchData.json();
      return match;
    })
    const data = await Promise.all(matches);
    return data;
}