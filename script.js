const tracks = [
    {
        title: "Wai wha",
        artist: "alice4r4r",
        cover: "img/1.jpg",
        audio: "audio/11.mp3"
    },
    {
        title: "Зацепила",
        artist: "Артур Пирожков",
        cover: "img/2.webp",
        audio: "audio/12.mp3"
    },
    {
        title: "Я звезда",
        artist: "Артур Пирожков",
        cover: "img/6.webp",
        audio: "audio/16.mp3"
    },
    {
        title: "Чика",
        artist: "Артур Пирожков",
        cover: "img/3.webp",
        audio: "audio/13.mp3"
    },
    {
        title: "#АЛКОГОЛИЧКА",
        artist: "Артур Пирожков",
        cover: "img/4.webp",
        audio: "audio/14.mp3"
    },
    {
        title: "ОНА РЕШИЛА СДАТЬСЯ",
        artist: "Артур Пирожков",
        cover: "img/5.webp",
        audio: "audio/15.mp3"
    },
    {
        title: "БМВ Х",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- БМВ Х.mp3"
    },
    {
        title: "Вижу тень",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Вижу тень .mp3"
    },
    {
        title: "Латиночка первая",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Латиночка первая.mp3"
    },
    {
        title: "Мне нужна сила",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Мне нужна сила.mp3"
    },
    {
        title: "На грани перехода",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- На грани перехода .mp3"
    },
    {
        title: "На квадрате стою ровно",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- На квадрате стою ровно .mp3"
    },
    {
        title: "Привет номер один",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Привет номер один .mp3"
    },
    {
        title: "Свег (Swag)",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Свег (Swag) .mp3"
    },
    {
        title: "Я не понимаю",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko- Я не понимаю .mp3"
    },
    {
        title: "Галактические движухи",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Галактические движухи .mp3"
    },
    {
        title: "Делай деньги",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Делай деньги .mp3"
    },
    {
        title: "Достоинство и Верность",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Достоинство и Верность .mp3"
    },
    {
        title: "Называйте его ло",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Называйте его ло. .mp3"
    },
    {
        title: "Север из снов",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Север из снов .mp3"
    },
    {
        title: "Тачки",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan Kravchenko-Тачки .mp3"
    },
    {
        title: "Лето в веснушках",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan_Kravchenko_Лето_в_веснушках_ВТОРАЯ_версия_.mp3"
    },
    {
        title: "Моя философия жизни",
        artist: "Dan Kravchenko",
        cover: "img/sexy.jpg",
        audio: "audio/Dan_Kravchenko_Моя_философия_жизни_часть_первая.mp3"
    }
];

const trackGrid = document.getElementById("track-grid");
const audioPlayer = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const currentTrack = document.getElementById("current-track");
const volumeSlider = document.getElementById("volume-slider");
const muteButton = document.getElementById("mute");
const progressBar = document.getElementById("progress");
const playlistGrid = document.getElementById("playlist-grid");

let currentTrackIndex = 0;

// Плейлисты
let playlists = JSON.parse(localStorage.getItem("playlists")) || [];
const createPlaylistButton = document.getElementById("create-playlist");

// Группировка треков по исполнителям
function groupTracksByArtist() {
    const artists = {};
    tracks.forEach(track => {
        if (!artists[track.artist]) {
            artists[track.artist] = [];
        }
        artists[track.artist].push(track);
    });
    return artists;
}


function loadTracks() {
    const artists = groupTracksByArtist();
    trackGrid.innerHTML = '';
    
    for (const artist in artists) {
        const artistSection = document.createElement('div');
        artistSection.className = 'artist-section';
        
        const artistTitle = document.createElement('h2');
        artistTitle.textContent = artist;
        artistSection.appendChild(artistTitle);
        
        const tracksContainer = document.createElement('div');
        tracksContainer.className = 'artist-tracks';
        
        const scrollLeft = document.createElement('button');
        scrollLeft.className = 'scroll-btn left';
        scrollLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const scrollRight = document.createElement('button');
        scrollRight.className = 'scroll-btn right';
        scrollRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        const tracksGrid = document.createElement('div');
        tracksGrid.className = 'tracks-grid';
        
        artists[artist].forEach(track => {
            tracksGrid.innerHTML += `
                <div class="track-card" data-audio="${track.audio}">
                    <img src="${track.cover}" alt="${track.title}">
                    <h3>${track.title}</h3>
                </div>
            `;
        });
        
        // Добавляем обработчики после создания элементов
        scrollLeft.addEventListener('click', () => {
            tracksGrid.scrollBy({ left: -200, behavior: 'smooth' });
        });
        
        scrollRight.addEventListener('click', () => {
            tracksGrid.scrollBy({ left: 200, behavior: 'smooth' });
        });
        
        tracksContainer.appendChild(scrollLeft);
        tracksContainer.appendChild(tracksGrid);
        tracksContainer.appendChild(scrollRight);
        artistSection.appendChild(tracksContainer);
        trackGrid.appendChild(artistSection);
    }
}

// Воспроизведение трека
function playTrack(audioSrc, title) {
    audioPlayer.src = audioSrc;
    audioPlayer.play();
    currentTrack.textContent = title;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    currentTrackIndex = tracks.findIndex(track => track.audio === audioSrc);
}

// Остальной код остается без изменений...
// (все обработчики событий и функции управления плеером остаются такими же)

// Обработчик клика на трек
document.addEventListener("click", (e) => {
    const trackCard = e.target.closest(".track-card");
    if (trackCard) {
        const audioSrc = trackCard.getAttribute("data-audio");
        const title = trackCard.querySelector("h3").textContent;
        playTrack(audioSrc, title);
    }
});

// Управление воспроизведением
playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Управление громкостью
volumeSlider.addEventListener("input", () => {
    audioPlayer.volume = volumeSlider.value;
    localStorage.setItem("volume", volumeSlider.value);
    if (audioPlayer.volume === 0) {
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});

// Кнопка mute/unmute
muteButton.addEventListener("click", () => {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeSlider.value = 0;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        audioPlayer.volume = 1;
        volumeSlider.value = 1;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
});

// Прогресс трека
audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener("input", () => {
    const time = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

// Переключение на следующий трек
function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const track = tracks[currentTrackIndex];
    playTrack(track.audio, track.title);
}

// Переключение на предыдущий трек
function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    const track = tracks[currentTrackIndex];
    playTrack(track.audio, track.title);
}

// Обработчики для кнопок "следующий" и "предыдущий"
document.getElementById("next").addEventListener("click", playNextTrack);
document.getElementById("prev").addEventListener("click", playPrevTrack);

// Создание плейлиста
createPlaylistButton.addEventListener("click", () => {
    const playlistName = prompt("Введите название плейлиста:");
    if (playlistName) {
        playlists.push({ name: playlistName, tracks: [] });
        updatePlaylists();
        savePlaylists();
    }
});

// Обновление списка плейлистов
function updatePlaylists() {
    playlistGrid.innerHTML = playlists.map((playlist, index) => `
        <div class="playlist-card">
            <h3>${playlist.name}</h3>
            <button onclick="deletePlaylist(${index})">Удалить</button>
            <div class="playlist-tracks">
                ${playlist.tracks.map(trackIndex => `
                    <div class="track-card" data-audio="${tracks[trackIndex].audio}">
                        <img src="${tracks[trackIndex].cover}" alt="${tracks[trackIndex].title}">
                        <h3>${tracks[trackIndex].title}</h3>
                        <p>${tracks[trackIndex].artist}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Удаление плейлиста
function deletePlaylist(index) {
    playlists.splice(index, 1);
    updatePlaylists();
    savePlaylists();
}

// Сохранение плейлистов в localStorage
function savePlaylists() {
    localStorage.setItem("playlists", JSON.stringify(playlists));
}

// Переключение вкладок
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
        button.classList.add("active");
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});

// Загрузка громкости из localStorage
const savedVolume = localStorage.getItem("volume");
if (savedVolume) {
    audioPlayer.volume = parseFloat(savedVolume);
    volumeSlider.value = savedVolume;
}

// Автоматическое воспроизведение следующего трека
audioPlayer.addEventListener("ended", playNextTrack);

// Загрузка треков и плейлистов при загрузке страницы
window.onload = () => {
    loadTracks();
    updatePlaylists();
};
