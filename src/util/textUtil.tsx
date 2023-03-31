export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
}

export function secondsToMinuteSeconds(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return `${minutes}:${remainder}`;
}

export function timeConverter(unixTimeStamp: number) {
  const formatter = new Intl.RelativeTimeFormat('en');

  const diff = Date.now() - new Date(unixTimeStamp).valueOf();
  const time = formatter.format(Math.round(-diff / (1000 * 60 * 60 * 24)), 'days');

  return time;
}