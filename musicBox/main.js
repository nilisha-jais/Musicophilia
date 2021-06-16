window.onload = () => {
    const song_img_el = document.querySelector('#song-image');
    const song_title_el = document.querySelector('#song-title');
    const song_artist_el = document.querySelector('#song-artist');
    const song_next_up_el = document.querySelector('#song-next-up');
    const artist_next_up_el = document.querySelector('#artist-next-up');

    const play_btn = document.querySelector('#play-btn');
    const play_btn_icon = document.querySelector('#play-btn .play-icon');
    const prev_btn = document.querySelector('#prev-btn');
    const next_btn = document.querySelector('#next-btn');

    const audio_player = document.querySelector('#music-player');

    let current_song_index;
    let next_song_index;

    let songs = [

    {
        title: 'Sub Urban',
        artist: 'Cradles',
        song_path: 'music/song2.mp3',
        img_path: 'artists/artist1.jpg',
    },
    {
        title: 'Yaara Teri Yaarri',
        artist: 'Darshan Raval',
        song_path: 'music/song3.mp3',
        img_path: 'artists/artist2.jpg',
    },
    {
        title: 'On and on ft. Daniel Levi',
        artist: 'Cartoon',
        song_path: 'music/song4.mp3',
        img_path: 'artists/artist3.jpg',
    },
    {
        title: 'See You Again',
        artist: 'Wiz Knalifa ft. Charlie Puth',
        song_path: 'music/song1.mp3',
        img_path: 'artists/artist4.jpg',
    },
    {
        title: 'Knan - Wavin Flag ',
        artist: 'Knaan',
        song_path: 'music/song5.mp3',
        img_path: 'artists/artist5.jpg',

    },
    {
        title: 'Best day of My Life',
        artist: 'American Authors',
        song_path: 'music/song6.mp3',
        img_path: 'artists/artist6.jpg',
    },
    {
        title: 'Something Just Like This',
        artist: 'Coldplay, The Chainsmokers',
        song_path: 'music/song7.mp3',
        img_path: 'artists/artist7.jpg',
    },
    {
        title: 'How Long',
        artist: 'Charlie puth',
        song_path: 'music/song8.mp3',
        img_path: 'artists/artist4.jpg',
    },
    {
        title: 'Memories',
        artist: 'Maroon 5',
        song_path: 'music/song9.mp3',
        img_path: 'artists/artist9.jpg',
    },
    {
        title: 'Birds',
        artist: 'Imagine dragons',
        song_path: 'music/song10.mp3',
        img_path: 'artists/artist8.jpg',
    },
    {
        title: 'Taki Taki',
        artist: 'DJ Snake',
        song_path: 'music/song11.mp3',
        img_path: 'artists/artist10.jpg',
    },
    {
        title: 'Sunn Raha Hai Na Tu',
        artist: 'Ankit Tiwari',
        song_path: 'music/song12.mp3',
        img_path: 'artists/artist11.jpg',
    },

    {
        title: 'Chand sifarish',
        artist: 'Shaan, Kailash Kher',
        song_path: 'music/song13.mp3',
        img_path: 'artists/artist12.jpg',
    },
    {
        title: 'Faded (Where are you now)',
        artist: 'Alan Walker',
        song_path: 'music/song14.mp3',
        img_path: 'artists/artist13.jpg',
    },
    {
        title: 'Kar Gayi Chull',
        artist: ' Badshah; Fazilpuria; Sukriti Kakar; Neha Kakkar  ',
        song_path: 'music/song15.mp3',
        img_path: 'artists/artist14.jpg',
    },
    {
        title: 'Cheap Thrills ft. Sean Paul',
        artist: 'Sia Furler',
        song_path: 'music/song16.mp3',
        img_path: 'artists/artist15.jpg',
    },
    {
        title: 'Blue Eyes ',
        artist: 'Yo Yo Honey Singh',
        song_path: 'music/song17.mp3',
        img_path: 'artists/artist16.jpg',
    },

    {
        title: 'Dheere Dheere Se Meri Zindagi ',
        artist: 'Yo Yo Honey Singh',
        song_path: 'music/song18.mp3',
        img_path: 'artists/artist16.jpg',
    },
    {
        title: 'Sooraj Dooba Hain',
        artist: 'Arijit Singh',
        song_path: 'music/song19.mp3',
        img_path: 'artists/artist17.jpg',
    },
    {
        title: 'Everything At Once',
        artist: 'Lenka',
        song_path: 'music/song20.mp3',
        img_path: 'artists/artist18.jpg',
    },
    {
        title: 'Tera Zikr',
        artist: 'Darshan Raval',
        song_path: 'music/song21.mp3',
        img_path: 'artists/artist2.jpg',
    },
    {
        title: 'Humnava Mere',
        artist: 'Rocky-Shiv',
        song_path: 'music/song22.mp3',
        img_path: 'artists/artist19.jpg',
    },
    {
        title: 'ily (i love you baby) ft. Emilee',
        artist: 'Surf Mesa',
        song_path: 'music/song23.mp3',
        img_path: 'artists/artist20.jpg',
    },
    {
        title: 'Alone, Pt. II',
        artist: 'Alan Walker and Ava Max',
        song_path: 'music/song24.mp3',
        img_path: 'artists/artist13.jpg',
    },
    {
        title: 'Play Date ',
        artist: 'Melanie Martinez',
        song_path: 'music/song25.mp3',
        img_path: 'artists/artist21.jpg',
    },
    {
        title: 'Lily',
        artist: 'Alan Walker, K-391, Emelie Hollow',
        song_path: 'music/song26.mp3',
        img_path: 'artists/artist13.jpg',
    },

    {
        title: 'Maa Tujhe Salaam',
        artist: 'A.R.Rahman',
        song_path: 'music/song27.mp3',
        img_path: 'artists/artist22.jpg',
    },
    {
        title: 'Baitikochi Chuste',
        artist: 'Anirudh Ravichander, Shree Mani',
        song_path: 'music/song28.mp3',
        img_path: 'artists/artist23.jpg',
    },


    {
        title: 'Visiri',
        artist: 'Sid Sriram, Shashaa Tirupati',
        song_path: 'music/song29.mp3',
        img_path: 'artists/artist24.jpg',
    },

    {
        title: 'Ae Dil Hai Mushkil',
        artist: 'Pritam, Arijit Singh',
        song_path: 'music/song30.mp3',
        img_path: 'artists/artist17.jpg',
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

        song_next_up_el.innerText = songs[next_song_index].title;
        artist_next_up_el.innerText = "by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }
}
