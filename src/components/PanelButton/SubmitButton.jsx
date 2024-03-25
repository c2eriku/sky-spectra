import React from "react";
import styles from "./PanelButton.module.scss"
import { useRouter } from "next/navigation";
import { simulateData } from "@/lib/questionSet.interface";
import { bfiDimension } from "@/lib/bfiDimension.enum";

export default function SubmitButton({ userChoices }) {
    const router = useRouter();

    function submitButtonHandler() {
        const calculateMap = new Map(Object.keys(bfiDimension).map((bd) => [bfiDimension[bd], 0]));
        const userChoiceArray = userChoices.map(uc => Array.from(uc));

        if (!validateUserSubmission(userChoiceArray)) {
            alert('有題目未填寫完成!');
            // return;
        }

        simulateData.forEach((sd, index) => {
            userChoiceArray[index].forEach(uca => {
                const choiceValue = sd.options.find(el => el.optionKey === uca).value;
                calculateMap.set(sd.category, calculateMap.get(sd.category) + choiceValue);
            })
        })

        let pathname;
        switch (getMaxTag(calculateMap)) {
            case bfiDimension.agreeableness: pathname = `identity/vault`; break;
            case bfiDimension.conscientiousness: pathname = `identity/wasteland`; break;
            case bfiDimension.extraversion: pathname = `identity/valley`; break;
            case bfiDimension.neuroticism: pathname = `identity/forest`; break;
            case bfiDimension.openness: pathname = `identity/piraire`; break;
        }
        const str = JSON.stringify(Object.fromEntries(calculateMap));
        router.push(`/${pathname}?choices=${str}`);

        function getMaxTag(myMap) {
            // 初始最大值和對應的鍵
            let maxKey = null;
            let maxValue = Number.NEGATIVE_INFINITY;

            // 遍歷映射
            for (let [key, value] of myMap) {
                // 如果找到更大的值，更新最大值和對應的鍵
                if (value > maxValue) {
                    maxKey = key;
                    maxValue = value;
                }
            }
            return maxKey;
        }
    }


    return (
        <button className={styles.panelButton} value="submit" onClick={submitButtonHandler}>submit</button>
    );
}

function validateUserSubmission(userChoiceArray) {
    for (const uca of userChoiceArray) {
        if (uca.length === 0) {
            return false;
        }
    }
    return true;
}
