import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: "vimeo-player",
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

// const onPlay = function(data) {
//     console.log(data)
// };

// player.on('play', onPlay);

player.on('timeupdate', function(data) {
   console.log(data)
});

