

import styles from "./style.module.scss";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function Home() {
  return (
    <main className={styles.wrapper}>

      <div className={styles.upperDrawer}>
        <div className={styles.title}>好好好</div>
        <div className={styles.content}>好好好好好好好好好好好好</div>
      </div>

      <div className={styles.cover}>
        <video className={styles.bgVideo} autoPlay muted loop>
          <source
            src="https://play-games.googleusercontent.com/vp/mp4/1280x720/UDP9yRiP464.mp4"
            type="video/mp4" />
        </video>
        <LinkButton href="/identify">開始測驗</LinkButton>
      </div>

    </main>
  );
}
