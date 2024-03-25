import styles from "./ProgressBar.module.scss";

export default function ProgressBar({ userChoices }) {
    return <div className={styles.wrapper}>
        <div className={styles.progressBar}></div>
        <div className={styles.eventWrapper}>
            {userChoices?.map((el, i) => {
                return <div key={i} className={styles.tagWrapper}>
                    <div className={styles.tag}
                        style={{ backgroundColor: el.size ? 'green' : 'smokewhite' }}></div>
                    <div style={{textAlign: 'center'}}>{i + 1}</div>
                </div>
            })
            }
        </div>
    </div>
}