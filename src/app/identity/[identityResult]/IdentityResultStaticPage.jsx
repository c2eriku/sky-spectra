"use client";
import { useRef } from "react";
import IdentityCard from "../../../components/IdentityCard/IdentityCard"
import styles from "./styles.module.scss"
import html2canvas from "html2canvas";
import { getIdentityDataset } from "@/lib/IdentityDataset";
import SquareButton from "@/components/SquareButton/SquareButton";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function IdentifyResultStaticPage({ identityResult }) {
    const dataset = getIdentityDataset(identityResult);
    const router = useRouter();
    const identityCardRef = useRef(null);

    const searchParams = useSearchParams();
    const choices = JSON.parse(searchParams.get('choices'));


    function downloadButtonHandler() {
        var content = identityCardRef.current;

        // 建立一個新的 Canvas 元素
        var canvas = document.createElement('canvas');
        canvas.width = content.offsetWidth;
        canvas.height = content.offsetHeight;

        // 獲取 Canvas 2D 上下文
        var context = canvas.getContext('2d');

        // 將 HTML 內容繪製到 Canvas 上
        html2canvas(identityCardRef.current, {
            scale: 2,
        }).then(function (canvas) {
            document.body.appendChild(canvas);
            // 將 Canvas 轉換為圖片 URL
            var dataURL = canvas.toDataURL('image/jpeg');

            // 創建一個下載連結
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'screenshot.jpg';

            // 模擬點擊下載連結
            link.click();
        });
    }

    function bfiButtonHandler() {
        router.push('https://zh.wikipedia.org/zh-tw/%E4%BA%94%E5%A4%A7%E6%80%A7%E6%A0%BC%E7%89%B9%E8%B4%A8');
    }

    return <Suspense>
        <main className={`${styles.root} ${styles[identityResult]}`}>
        <div className={styles.content}>
            <section >
                <IdentityCard identityResult={identityResult} identitySet={dataset.skyMapInfo} choices={choices}></IdentityCard>
            </section>

            <section className={styles.buttonPanel} ref={identityCardRef}>
                <Link href="/">
                    <SquareButton action="refresh">再測一次</SquareButton>
                </Link>
                {/* <SquareButton action="download" onClick={downloadButtonHandler}>圖片下載</SquareButton> */}
                <SquareButton action="book" onClick={bfiButtonHandler}>BFI說明</SquareButton>
            </section>

            <div className={styles.description}>
                <div className={styles.secBlock}>
                    <div className={styles.subtitle}>{dataset.bfiInfo.name}</div>
                    <div className={styles.subContent}>
                        {dataset.bfiInfo.description}
                    </div>

                    <div className={styles.subtitle}>
                        <span>{dataset.skyMapInfo.name}</span>
                    </div>
                    <div className={styles.subContent}>
                        {dataset.skyMapInfo.description}
                    </div>
                </div>
            </div>

        </div>
    </main ></Suspense>
}