import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Terminal from "../components/terminal/Terminal";
import Hero from "../components/hero/Hero";
import {useContext, useEffect, useState} from "react";
import {SmoothScrollContext, SmoothScrollProvider} from "../contexts/SmoothScroll";
import {Marquee} from "../components/marquee/Marquee";

export default function Home() {
    const { scroll } = useContext(SmoothScrollContext)
    return (
        <div data-scroll-section>
            <Head>
                <title>Ariel Saldana | Home</title>
                <meta name="description" content="Ariel Saldana. Software Engineer at Goldman Sachs." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Marquee options={{ duration: 3000, numberOfItems: 5 }}>
                <h2 className="orange-halo">Ariel Saldana</h2>
            </Marquee>

            <main>
                <Hero></Hero>
                <Terminal></Terminal>
                <h5>Where I have Worked</h5>
                <ul className={styles.list}>
                    <li>Goldman Sachs</li>
                    <li>Unreal</li>
                    <li>Urban FT</li>
                    <li>Giift</li>
                    <li>Urban FT</li>
                </ul>

                <h5>Recent Blogs</h5>
                <ul className={styles.list}>
                    <li>Upgrading Node to the Latest Version</li>
                    <li>iOS 8 Web Scrolling Is a Pretty Big Deal</li>
                    <li>Angular JS Introduction</li>
                    <li>Mordernizr and Web Development</li>
                    <li>Palringo Python Bot</li>
                    <li>PI Day - Birth of this site</li>
                </ul>
            </main>
        </div>
    )
}
