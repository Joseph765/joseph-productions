import styles from '../styles/Releases.module.css';
import Header from './header';
import data from '../db/data.json';

export default function Purchase() {

  function createAlbum(cover) {

    var songs = [];
    for (let i = 0; i < 10; i ++) {
      songs.push(<audio controls>
        <source src={data[0].link} type="audio/mp3" />
      </audio>);
    }

    const album =
      <div className={styles.album}>
        <img className={styles.albumCover} src={cover} />
        <div className={styles.songs}>
          {songs}
        </div>
      </div>;

      return album;
  }

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.releases}>Releases</h1>
      <div>
        <div className={styles.albums}>
          {createAlbum("/hawaii_part_ii.jpg")}
          {createAlbum("/2020.jpg")}
          {createAlbum("/USA.jpg")}
          {createAlbum("/mystic_familiar.jpg")}
        </div>
      </div>
    </div>
  );
}