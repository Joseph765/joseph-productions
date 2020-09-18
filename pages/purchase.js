import styles from '../styles/Purchase.module.css';
import Header from './header';
import data from '../db/data.json';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Purchase</h1>
      <ul>
        <li>{data[0].name}</li>
        <audio controls>
          <source src={data[0].link} type="audio/mp3" />
        </audio>
      </ul>
    </div>
  );
}