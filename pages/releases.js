import styles from '../styles/Releases.module.css';
import Header from './header';
import data from '../db/data.json';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Releases</h1>
      <div>
        <div>
          <img src="/hawaii_part_ii.jpg" />
          <div>
            <audio controls>
              <source src={data[0].link} type="audio/mp3" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}