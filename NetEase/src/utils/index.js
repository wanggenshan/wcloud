export function forTime(time) {
  let min = parseInt((time % 3600) / 60) + "",
    sec = parseInt(time % 60) + "";
  return min.padStart(2, "0") + ":" + sec.padStart(2, "0");
}
