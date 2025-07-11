// musicPlayer.js

const music = document.getElementById('bgMusic');
let isPlaying = localStorage.getItem('musicStatus') === 'true';

if (isPlaying) {
  music.play();
} else {
  music.pause();
}

document.getElementById('musicToggle').addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    localStorage.setItem('musicStatus', 'false');
  } else {
    music.play();
    localStorage.setItem('musicStatus', 'true');
  }
  isPlaying = !isPlaying;
});
