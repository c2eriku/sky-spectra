import Link from "next/link";
import styles from "./LinkButton.module.scss";

export default function LinkButton({ children, href }) {

    return <Link href={href}>
        <section className={styles.linkButton}>
            <div className={styles.block}>
                <i className={styles.play}></i>
            </div>
            <div className={styles.text}>{children}</div>
        </section >
    </Link>

}