import {
  extractHours,
  extractMilliseconds,
  extractMinutes,
  extractSeconds,
  padZeros,
} from "./utils";

export default function() {
  return d => {
    const hours = extractHours(d);
    const minutes = extractMinutes(d);
    const seconds = extractSeconds(d);
    const milliseconds = extractMilliseconds(d);

    let retString = "";
    if (hours > 0) {
      retString += padZeros(hours) + ":";
    }
    retString += padZeros(minutes) + ":" + padZeros(seconds);
    if (milliseconds > 0) {
      retString += "." + milliseconds.toString();
    }
    return retString;
  }
}
