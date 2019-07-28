export function extractHours(d) {
  return Math.floor(d / (60 * 60 * 1000));
}

export function extractMinutes(d) {
  return Math.floor(d % (60 * 60 * 1000) / (60 * 1000));
}

export function extractSeconds(d) {
  return Math.floor(d % (60 * 1000) / 1000);
}

export function extractMilliseconds(d) {
  // Ignore sub-millisecond
  return Math.floor(d % 1000);
}

export function padZeros(d) {
  if (d < 10) {
    return "0" + d.toString();
  } else {
    return d.toString();
  }
}

