import styles from '../styles/Purchase.module.css';
import data from '../db/data.json';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <h1>Purchase</h1>
      <ul>
        <li>{data[0].name}</li>
      </ul>
    </div>
  );
}