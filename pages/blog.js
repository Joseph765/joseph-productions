import styles from '../styles/Blog.module.css';
import Videos from '../components/videos';

function Blog () {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <Videos />
    </div>
  );
}


export default Blog;