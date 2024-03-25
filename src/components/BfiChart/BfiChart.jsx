"use client";
import { bfiDimension } from "@/lib/bfiDimension.enum";
import styles from "./BfiChart.module.scss"
import React, { useEffect, useState } from "react";

export default function BfiChart({choices}) {
    return <div className={styles.bfiChart}>
        <BfiUnit unitName="外向性" score={choices[bfiDimension.extraversion]} color="#FFB266"></BfiUnit>
        <BfiUnit unitName="親和性" score={choices[bfiDimension.agreeableness]} color="#66CC99"></BfiUnit>
        <BfiUnit unitName="責任心" score={choices[bfiDimension.conscientiousness]} color="#CC9966"></BfiUnit>
        <BfiUnit unitName="神經質" score={choices[bfiDimension.neuroticism]} color="#9980FF"></BfiUnit>
        <BfiUnit unitName="開放性" score={choices[bfiDimension.openness]} color="#BFBFBF"></BfiUnit>
    </div>
}



function BfiUnit({ unitName, score, color }) {
    const denominator = 10;
    const [percent, setPercent] = useState(0);

    useEffect((p) => {
        p = 10;
        setPercent((score / denominator) * 100);
        return () => { };
    }, [score, percent]);


    return <div className={styles.bfiUnit}>
        <div className={styles.unitName} style={{ color: color }}>{unitName}</div>
        <div className={styles.chart}>
            <div className={styles.linear}></div>
            <div className={styles.pillarLinear} style={{ width: `${percent}%`, borderColor: color }}></div>
            <div className={styles.pillar} style={{ left: `${percent}%`, background: color }}></div>
        </div>
    </div>

}