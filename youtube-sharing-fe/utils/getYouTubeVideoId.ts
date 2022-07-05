/**
 * Get the YouTube video ID from a url or string.
 *
 * @param  {String} string - The url or string.
 * @return {String}        - The video ID.
 */
export const getYouTubeVideoId = (string: string) => {
  if (typeof string !== 'string') {
    throw new TypeError('First argument must be a string.');
  }

  const regex =
    /(youtube\.com\/watch\?v=|youtu\.be\/)([0-9A-Za-z_-]{10}[048AEIMQUYcgkosw])/;
  var match = string.match(regex);
  if (match && match.length > 1) {
    return match[2];
  }
  return string;
};
