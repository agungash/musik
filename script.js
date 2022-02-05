const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector("audio");
const songList = [
    {
        path: "musik/Orange-(osanime.com).mp3",
        songName: "7!! (Seven Oops) - Orange",
    },
    {
        path: "musik/Hikaru-nara-(osanime.com).mp3",
        songName: "Goose House - Hikaru Nara",
    },
    {
        path: "musik/LAGUF1.MOBI - Kimi no na wa - Zen zen zense.mp3",
        songName: "Radwimps - Zen zen zense",
    },
    {
        path: "musik/幾田りら「ロマンスの約束」Official Music Video (320 kbps).mp3",
        songName: "Lilas Ikuta - Romansu no Yakusoku",
    },
    {
        path: "musik/Answer (320 kbps).mp3",
        songName: "Lilas Ikuta - Answer",
    },
    {
        path: "musik/(DownloadLagu321.Net) Kokoronashi - Gumi.mp3",
        songName: "Gumi - Kokoronashi",
    },
    {
        path: "musik/米津玄師  MV「Lemon」.mp3",
        songName: "Kenshi Yonezu - Lemon",
    },
    {
        path: "musik/YOASOBI「たぶん」Official Music  Video.mp3",
        songName: "Yoasobi - Tabun",
    },
    {
        path: "musik/Yoru-ni-kakeru-(osanime.com).mp3",
        songName: "Yoasobi - Yoru ni Kakeru",
    },
    {
        path: "musik/LISA - MONEY [128 kbps].mp3",
        songName: "Lisa - Money",
    },
    {
        path: "musik/TWICE - What is Love [128 kbps].mp3",
        songName: "Twice - What is Love",
    },
    {
        path: "musik/IU - 라일락 (LILAC) [321 kbps].mp3",
        songName: "Lee Ji-eun (IU) - Lilac",
    },
    {
        path: "musik/Monday Kiz Punch - Another Day (Hotel Del Luna OST Part.1) [128 kbps].mp3",
        songName: "Monday Kiz Punch - Another Day",
    },
    {
        path: "musik/IU - Celebrity [128 kbps].mp3",
        songName: "Lee Ji-eun (IU) - Celebrity",
    },
    {
        path: "musik/LOCO Punch - Say Yes (OST Moon Lovers [129 kbps].mp3",
        songName: "LOCO Punch - Say Yes",
    },
    {
        path: "musik/Epik High Lee Hi - Can You Hear My Heart (OST Scarlet Heart Ryeo) [129 kbps].mp3",
        songName: "Epik High Lee Hi - Can You Hear My Heart",
    },
    {
        path: "musik/Park Shin Hye - Love is Like Snow [OST Pinocchio Part.4] [128 kbps].mp3",
        songName: "Park Shin Hye - Love is Like Snow",
    },
    {
        path: "musik/Every Single Day - Non [128 kbps].mp3",
        songName: "Every Single Day - Non-fiction",
    },
    {
        path: "musik/Tiger JK - First Love [OST Pinocchio Part.1] [128 kbps].mp3",
        songName: "Tiger JK - First Love",
    },
    {
        path: "musik/Punch - Done For Me (Hotel Del Luna OST Part.12) [129 kbps].mp3",
        songName: "Punch - Done For Me",
    },
];
let song_Playing = false;
function playSong() {
    song_Playing = true;
    audio.play();
    playPause.classList.add("active");
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}
function pauseSong() {
    song_Playing = false;
    audio.pause();
    playPause.classList.remove("active");
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}
playPause.addEventListener("click", () => (song_Playing ? pauseSong() : playSong()));
function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}
let i = 0;
loadSong(songList[i]);
function prevSong() {
    i--;
    if(i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);
function nextSong() {
    i++;
    if(i > songList.length - 1) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);