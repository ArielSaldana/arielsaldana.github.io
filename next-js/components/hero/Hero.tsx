import styles from "./Hero.module.scss";
import {useState,useEffect} from "react";
import {random} from "nanoid";
import test from "node:test";

export default function Hero() {
    const greetings = "Full Stack Software Engineer @GoldmanSachs ☻";
    // const possibleLetters = "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789☻@ ";
    const possibleLetters = greetings;

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function encodeText(originalTextLen: number): string {
        let output = "";
        while (output.length < originalTextLen) {
            const rand = getRandomInt(possibleLetters.length);
            output += possibleLetters.at(rand);
        }
        return output;
    }

    function decodeText(currentText: string, endText: string): string {
        const randomText = encodeText(endText.length);
        let endMessage = "";
        for (let i = 0; i < currentText.length; i++) {
            const endTextLetter = endText.charAt(i);
            const currentTextLetter = currentText.charAt(i);
            const randomTextLetter = randomText.charAt(i);

            if (currentTextLetter == endTextLetter) {
                endMessage += currentTextLetter;
            } else {
                endMessage += randomTextLetter;
            }
        }
        return endMessage;
    }

    const [message, setMessage] = useState(greetings);

    useEffect(() => {
        let current = encodeText(greetings.length)
        setMessage(current);

        const inter = setInterval(() => {
            current = decodeText(current, greetings);
            setMessage(current);

            if (current == greetings) {
                end()
            }
        }, 30);

        const end = () => {
            clearInterval(inter);
        };
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.wrapper}>
                <h1 className={styles.greetings}>{message}</h1>
            </div>
        </div>
    )
}