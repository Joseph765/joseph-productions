import styles from '../styles/Purchase.module.css';
import Header from './header';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Purchase</h1>
    </div>
  );
}