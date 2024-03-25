import React from "react";
import Link from "next/link";
import styles from "./PanelButton.module.scss"

export default function PanelButton({ action, onClick }) {
    if (action === 'submit') {
        return (
            <div className={styles.panelButton} value={action}>
                <Link href={`/classify-result/${1}`}>{action}</Link>
            </div>
        );
    }

    return (
        <button className={styles.panelButton} value={action} onClick={onClick}>{action}</button>
    );
}
