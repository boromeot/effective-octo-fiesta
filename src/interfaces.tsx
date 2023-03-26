export interface summoner {
  accountId: string,
  id: string,
  name: string,
  puuid: string,
  revisionDate: number,
  summonerLevel: number
}

export interface rankedInfo {
  freshBlood: boolean,
  hotStreak: boolean,
  inactive: boolean,
  leagueId: string,
  leaguePoints: number,
  losses: number,
  queueType: string,
  rank: string,
  summonerId: string,
  summonerName: string,
  tier: string,
  veteran: boolean,
  wins: number
}