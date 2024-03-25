"use client";
import { useEffect, useState } from "react";
import OptionWrapper from "../../components/OptionWrapper/OptionWrapper";
import styles from "./style.module.scss";
import { QuestionSet, simulateData } from "@/lib/questionSet.interface";
import PanelButton from "../../components/PanelButton/PanelButton";
import SubmitButton from "@/components/PanelButton/SubmitButton";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export default function IdentifyPage() {
    const [questions, setQuestions] = useState<QuestionSet[]>([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    const [userChoices, setUserChoices] = useState<Set<string>[]>([]);

    useEffect(() => {
        console.log("✅ Connecting to firebase-cloud firestore");
        const fetchData = async () => {
            setQuestions(simulateData);
            setUserChoices(new Array(simulateData.length).fill('').map(() => new Set()));
        };
        fetchData();
        return () => {
            console.log("❌ Disconnected from firebase-cloud firestore");
        };
    }, []);


    function nextButtonHandler() {
        const cal = questionIndex + 1;
        setQuestionIndex(cal < questions.length ? cal : questionIndex);
    }

    function prevButtonHandler() {
        const cal = questionIndex - 1;
        setQuestionIndex(cal >= 0 ? cal : questionIndex);
    }

    function updateUserChoice(choice: Set<string>) {
        const nextChoices = userChoices.map((c, i) => {
            if (i === questionIndex) { return choice; }
            else { return c; }
        })
        setUserChoices(nextChoices);
    }

    return <main className={styles.root}>

        <div className={styles.progressBar}>
            <span>填寫進度:</span>
            <div style={{ marginTop: '.5rem', marginLeft: '5%' }}>
                <ProgressBar userChoices={userChoices}></ProgressBar>
            </div>
        </div>

        <div className={styles.wrapper}>
            <div className={styles.questionDescription}>{questionIndex + 1}.{question?.description}</div>
            <OptionWrapper
                key={questionIndex}
                options={question?.options}
                type={question?.type}
                userChoice={userChoices[questionIndex]}
                updateUserChoice={updateUserChoice}>
            </OptionWrapper>
        </div>

        {
            questionIndex > 0 &&
            <PanelButton action="prev" onClick={prevButtonHandler}></PanelButton>
        }
        {
            questionIndex < questions.length - 1 &&
            <PanelButton action="next" onClick={nextButtonHandler}></PanelButton>
        }
        {
            questionIndex == questions.length - 1 &&
            <SubmitButton userChoices={userChoices}></SubmitButton>
        }
    </main >
}