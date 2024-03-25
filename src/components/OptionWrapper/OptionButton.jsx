import styles from "./OptionButton.module.scss";

export default function OptionButton({ type, optionKey, description, onChange, defaultChecked, name }) {
    return <div className={styles.optionButton}>
        <input
            type={type}
            id={optionKey}
            onClick={onChange}
            defaultChecked={defaultChecked}
            name={name}></input>
        <label htmlFor={optionKey}>{description}</label>
    </div>
}