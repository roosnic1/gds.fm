
function initalize() {
  console.log('player.js init');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', (event) => {
    console.log('Event', event);
    document.getElementById('gdsfmPlayer').play();
  });
}



if (document.readyState === 'complete' || document.readyState !== 'loading') {
  initalize();
} else {
  document.addEventListener('DOMContentLoaded', initalize);
}