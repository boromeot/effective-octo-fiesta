export interface summoner {
  accountId: string,
  id: string,
  name: string,
  puuid: string,
  revisionDate: number,
  summonerLevel: number,
  profileIconId: number,
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


// MATCH DATA ======================
export interface MatchData {
  info: Info,
  metaData: MetaData,
  profileName: string | undefined;
}

export interface Info {
  gameCreation: number,
  gameDuration: number,
  gameEndTimestamp: number,
  gameId: number,
  gameMode: string,
  gameName: string,
  gameStartTimestamp: number,
  gameType: string,
  gameVersion: string,
  mapId: number,
  participants: Array<Participant>,
  platformId: string,
  queueId: number,
  teams: Array<Object>,
  tournamentCode: string,
}

export interface MetaData {
  dataVersion: string,
  matchId: string,
  participants: Array<string>,
}

export interface Participant {
  summonerName: string,
  summonerId: string,
  deaths: number,
  kills: number,
  assists: number,
  totalMinionsKilled: number,
  neutralMinionsKilled: number,
  visionScore: number,
  champLevel: number,
  championName: string,
  win: boolean,
  summoner1Id: number,
  summoner2Id: number,
  item0: number,
  item1: number,
  item2: number,
  item3: number,
  item4: number,
  item5: number,
  item6: number,
  perks: Perks,
}

export interface Perks {
  statPerks: Object,
  styles: Array<Styles>
}

export interface Styles {
  description : string,
  selections : Array<Object>,
  style : number
}