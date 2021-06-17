window.onload = () => {
    const song_img_el = document.querySelector('#song-image');
    const song_title_el = document.querySelector('#song-title');
    const song_artist_el = document.querySelector('#song-artist');
    const song_next_up_el = document.querySelector('#song-next-up');

    const play_btn = document.querySelector('#play-btn');
    const play_btn_icon = document.querySelector('#play-btn .play-icon');
    const prev_btn = document.querySelector('#prev-btn');
    const next_btn = document.querySelector('#next-btn');

    const audio_player = document.querySelector('#music-player');

    let current_song_index;
    let next_song_index;

    let songs = [

    {
        title: 'Tujhme Rab Dikhta Hai',
        artist: 'Rab ne bna di Jodi',
        song_path: 'playlist/sound1.mp3',
        img_path: 'profile/play1.jpg',
    },
    {
        title: 'Moh Moh ke dhaage',
        artist: 'Dum laga ke Haisha',
       song_path: 'playlist/sound2.mp3',
        img_path: 'profile/play2.jpg',
    },
    {
        title: 'O Re Piya',
        artist: 'Aja Nachle',
        song_path: 'playlist/sound3.mp3',
        img_path: 'profile/play3.jpg',
    },
    {
        title: 'Tune jo na kaha',
        artist: 'New York',
        song_path: 'playlist/sound4.mp3',
        img_path: 'profile/play4.jpg',
    },
    {
        title: 'Saiyaara',
        artist: 'Ek tha Tiger',
        song_path: 'playlist/sound5.mp3',
        img_path: 'profile/play5.jpg',

    },
    {
        title: 'Bol na Halke Halke',
        artist: 'Jhoom Barabar Jhoom',
        song_path: 'playlist/sound6.mp3',
        img_path: 'profile/play6.jpg',
    },
    {
        title: 'Mitwa',
        artist: 'Kabhi Alvida Na Kehna',
        song_path: 'playlist/sound7.mp3',
        img_path: 'profile/play7.jpg',
    },
    

    ];

    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function TogglePlaySong() {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play')
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play')
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong(next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length - 1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if (next_song_index > songs.length - 1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index + 1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "');";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title + " from " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }
}