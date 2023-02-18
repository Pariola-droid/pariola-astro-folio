//Basic styles import
import styles from './styles/navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.wrapper}>
          <h1>
            <a href="/">pariola.</a>
          </h1>

          <small className={styles.uc}>🚧</small>
        </div>
      </nav>
    </>
  );
}
