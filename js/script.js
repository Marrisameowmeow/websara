document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const volumeControl = document.getElementById('volumeControl');
    
    // Play/pause toggle
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '❚❚';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });
    
    // Volume control
    volumeControl.addEventListener('input', function() {
        audio.volume = this.value;
    });
    
    // Start with muted volume to respect users
    audio.volume = 0.5;
});/ JavaScript Document