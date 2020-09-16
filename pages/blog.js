import styles from '../styles/Blog.module.css';
import Header from './header';

export default function Purchase() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Blog</h1>
    </div>
  );
}