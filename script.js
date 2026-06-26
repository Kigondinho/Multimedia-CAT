const video      = document.getElementById('wildlifeVideo');
const btnLabel   = document.getElementById('btnLabel');
const btnIcon    = document.getElementById('btnIcon');
const statusDot  = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

const playIcon  = '<polygon points="5,3 19,12 5,21"/>';
const pauseIcon = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';

let isHidden = false;

function toggleVideo() {
  // Video is hidden — show it and play
  if (isHidden) {
    video.style.visibility = 'visible';
    isHidden = false;
    video.play();
    return;
  }

  // Video is playing — hide it
  if (!video.paused) {
    video.pause();
    video.style.visibility = 'hidden';
    isHidden = true;
    btnIcon.innerHTML = playIcon;
    btnLabel.textContent = 'Show & play video';
    statusDot.className = 'dot';
    statusText.textContent = 'Hidden';
    return;
  }

  // Video is paused and visible — play it
  video.play();
}

video.addEventListener('play', function () {
  isHidden = false;
  video.style.visibility = 'visible';
  btnIcon.innerHTML = pauseIcon;
  btnLabel.textContent = 'Hide video';
  statusDot.className = 'dot playing';
  statusText.textContent = 'Playing';
});

video.addEventListener('pause', function () {
  btnIcon.innerHTML = playIcon;
  btnLabel.textContent = 'Play video';
  statusDot.className = 'dot';
  statusText.textContent = 'Paused';
});

video.addEventListener('ended', function () {
  btnIcon.innerHTML = playIcon;
  btnLabel.textContent = 'Play video';
  statusDot.className = 'dot';
  statusText.textContent = 'Ended';
});
