import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const setPlayBackTime = seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const getPlaybackTime = () => {
  return Number(localStorage.getItem('videoplayer-current-time'));
};

const handleTimeUpdate = throttle(({ seconds }) => {
  setPlayBackTime(seconds);
}, 1000);

player.on('timeupdate', handleTimeUpdate);

window.addEventListener('load', () => {
  const seconds = getPlaybackTime();
  player.setCurrentTime(seconds);
});
