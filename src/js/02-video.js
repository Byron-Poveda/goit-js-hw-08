import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const defaultTime = '0';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const throttleSetItem = throttle(e => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}, 1000);
player.on('timeupdate', throttleSetItem);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
