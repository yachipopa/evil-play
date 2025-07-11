:root {
    --primary-color: #fed42b;
    --primary-dark: #e6c126;
    --background-color: #121212;
    --card-color: #282828;
    --player-bg: #181818;
    --text-color: #fff;
    --text-secondary: #b3b3b3;
    --scroll-btn-bg: rgba(30, 30, 30, 0.7);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

/* Навигационные вкладки */
.tabs {
    display: flex;
    padding: 0 20px;
    background-color: var(--background-color);
    border-bottom: 1px solid #333;
    position: sticky;
    top: 0;
    z-index: 10;
}

.tab-button {
    padding: 15px 20px;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
}

.tab-button.active {
    color: var(--text-color);
    font-weight: 600;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary-color);
}

/* Основное содержимое */
.main-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Кнопки */
.primary-button {
    background-color: var(--primary-color);
    color: #000;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 20px;
}

.primary-button:hover {
    background-color: var(--primary-dark);
}

.control-button {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 18px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s;
}

.control-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

.play-button {
    background-color: var(--primary-color);
    color: #000;
}

.play-button:hover {
    background-color: var(--primary-dark);
}

/* Секции с треками */
.artist-section {
    margin-bottom: 30px;
}

.artist-section h2 {
    margin-bottom: 15px;
    font-size: 24px;
    padding-left: 10px;
}

.artist-tracks {
    position: relative;
    width: 100%;
}

.scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: var(--scroll-btn-bg);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 16px;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s, background 0.3s;
}

.scroll-btn.left {
    left: 0;
}

.scroll-btn.right {
    right: 0;
}

.artist-tracks:hover .scroll-btn {
    opacity: 1;
}

.scroll-btn:hover {
    background-color: var(--primary-color);
    color: #000;
}

.tracks-grid {
    display: flex;
    gap: 15px;
    padding: 5px 10px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
}

.tracks-grid::-webkit-scrollbar {
    display: none;
}

/* Карточки треков */
.track-card {
    flex: 0 0 160px;
    background-color: var(--card-color);
    border-radius: 8px;
    padding: 15px;
    cursor: pointer;
    transition: transform 0.3s, background 0.3s;
}

.track-card:hover {
    transform: translateY(-5px);
    background-color: #383838;
}

.track-card img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 12px;
}

.track-card h3 {
    font-size: 14px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Аудиоплеер */
.audio-player {
    background-color: var(--player-bg);
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
    border-top: 1px solid #333;
    position: sticky;
    bottom: 0;
}

.player-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    order: 1;
}

.track-info {
    flex: 1;
    min-width: 150px;
    text-align: center;
    font-size: 14px;
    order: 2;
}

.progress-container {
    flex: 1 0 100%;
    padding: 0 10px;
    order: 3;
}

.progress-bar {
    width: 100%;
    height: 4px;
    accent-color: var(--primary-color);
    cursor: pointer;
}

.volume-control {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 150px;
    order: 4;
}

.volume-slider {
    width: 100px;
    accent-color: var(--primary-color);
    cursor: pointer;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
    .tabs {
        padding: 0 10px;
    }
    
    .tab-button {
        padding: 12px 15px;
        font-size: 14px;
    }
    
    .main-content {
        padding: 15px 10px;
    }
    
    .track-card {
        flex: 0 0 120px;
        padding: 10px;
    }
    
    .track-card h3 {
        font-size: 12px;
    }
    
    .audio-player {
        padding: 10px 15px;
        gap: 10px;
    }
    
    .player-controls {
        order: 2;
    }
    
    .track-info {
        order: 1;
        flex: 1 0 100%;
        margin-bottom: 5px;
    }
    
    .progress-container {
        order: 3;
    }
    
    .volume-control {
        order: 4;
        flex: 1;
        justify-content: flex-end;
    }
    
    .volume-slider {
        width: 80px;
    }
}

@media (max-width: 480px) {
    .artist-section h2 {
        font-size: 20px;
    }
    
    .track-card {
        flex: 0 0 100px;
    }
    
    .scroll-btn {
        width: 30px;
        height: 30px;
        font-size: 12px;
    }
}
