import styles from '../styles/Releases.module.css';
import data from '../db/data.json';
import { useState, useEffect, useRef } from 'react';
import Song from './song.js';

export default function Purchase() {

  const audioRef = useRef(null);

  function changeSong(songName) {
    // if (songName === currentSong) {
    //   if (playing) {
    //     audioRef.current.pause();
    //     setPlaying(false);
    //   } else {
    //     audioRef.current.play();
    //     setPlaying(true);
    //   }
    // } else {
    //   setCurrentSong(songName);
    //   audioRef.current.pause();
    //   audioRef.current.setAttribute('src', songName);
    //   audioRef.current.load();
    //   audioRef.current.play();
    //   setPlaying(true);
    // }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.releases}>Releases</h1>
      <div>
        <div className={styles.albums}>
          {/* <Song changeSong={changeSong} isPlaying={playing} /> */}
        </div>
      </div>
    </div>
  );

}