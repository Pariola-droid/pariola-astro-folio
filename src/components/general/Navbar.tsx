//Basic styles import
import Spotify from '../plugin/Spotify';
import styles from './styles/navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.wrapper}>
          <h1>
            <a href="/">pariola.</a>
          </h1>

          <Spotify />
        </div>
      </nav>
    </>
  );
}
