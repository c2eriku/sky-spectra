import styles from "./IdentityCard.module.scss";
import pageStyles from "../../app/identity/[identityResult]/styles.module.scss"
import BfiChart from "../BfiChart/BfiChart";

export default function IdentityCard({ identityResult,identitySet, choices }) {
    return <section className={`${styles.identityCard}  ${pageStyles[identityResult]}`}>
        <section className={styles.wrapper}>
            {/* <fieldset>
                <legend><span>XXX 歸屬於</span></legend>
            </fieldset> */}
            <div className={styles.mapTitle}>
                <div className={styles.mapName}>
                    <span>{identitySet.name}</span>
                    <p>{identitySet.subtitle}</p>
                </div>
                <div className={styles.mapIcon}>
                    <i className={styles[identityResult]}></i>
                </div>
            </div>


            {/* 地圖描述 */}
            <div className={styles.mapInfo}>
                <BfiChart choices={choices}></BfiChart>
            </div>
        </section>
    </section >
}