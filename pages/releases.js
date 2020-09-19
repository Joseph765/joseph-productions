import styles from '../styles/Releases.module.css';
import Header from './header';
import data from '../db/data.json';
import { useState, useEffect, useRef } from 'react';
import Song from './song.js';

export default function Purchase() {

  const [currentSong, setCurrentSong] = useState("")
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  function changeSong(songName) {
    if (songName === currentSong) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    } else {
      setCurrentSong(songName);
      audioRef.current.pause();
      audioRef.current.setAttribute('src', songName);
      audioRef.current.load();
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.releases}>Releases</h1>
      <audio ref={audioRef} controls>
        <source src={currentSong} type="audio/mp3" />
      </audio>
      <div>
        <div className={styles.albums}>
          <Song changeSong={changeSong} isPlaying={playing} />
        </div>
      </div>
    </div>
  );
}