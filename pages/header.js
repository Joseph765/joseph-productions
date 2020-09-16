import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header () {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Joseph Productions</a>
      </Link>
      <nav className={styles.navigation} >
        <Link href="/releases">
          <a>Releases</a>
        </Link>
        <Link href="./purchase">
          <a>Purchase</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </div>
  );
}