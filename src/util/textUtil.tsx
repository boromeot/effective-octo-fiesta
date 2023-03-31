export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
}

export function secondsToMinuteSeconds(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;
    return `${minutes}:${remainder}`;
}

export function timeConverter(unixTimeStamp: number) {
  const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
  const HOUR_MILLISECONDS = 1000 * 60 * 60;
  const MINUTE_MILLISECONDS = 1000 * 60;
  
  const formatter = new Intl.RelativeTimeFormat('en');
  const diff = Date.now() - new Date(unixTimeStamp).valueOf();
  
  let time;

  if (diff < HOUR_MILLISECONDS) {
    let minutes = diff / MINUTE_MILLISECONDS;
    time = formatter.format(Math.round(-minutes), 'minutes');
  } else if (diff < DAY_MILLISECONDS) {
    let hours = diff / HOUR_MILLISECONDS;
    time = formatter.format(Math.round(-hours), 'hours');
  } else {
    let days = diff / DAY_MILLISECONDS;
    time = formatter.format(Math.round(-days), 'days');
  }
  return time;
}