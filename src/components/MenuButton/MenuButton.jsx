import styles from "./MenuButton.module.scss";

export default function MenuButton({ children, action, onClick }) {
    return <button className={styles.menuButton} onClick={onClick}>
        <section><i className={styles[action]} />{children}</section>
    </button>
}