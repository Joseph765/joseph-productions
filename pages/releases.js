import styles from '../styles/Releases.module.css';
import Header from './header';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Releases</h1>
    </div>
  );
}