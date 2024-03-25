import styles from "./SquareButton.module.scss";

export default function SquareButton({ children, action, onClick }) {
    return <button className={styles.squareButton} onClick={onClick}>
        <section className={styles.card}>
            <i className={styles[action]} />
        </section>
        <section>
            {children}
        </section>
    </button>
}