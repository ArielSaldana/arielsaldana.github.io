import {FC, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import styles from "./Marquee.module.scss"

type Options = {
    duration: number
}

type Props = {
    options: Options,
    children: ReactNode
};

export const Marquee: FC<Props> = ({ children, options}) => {
    const [marqueePosition, setMarqueePosition] = useState(0);
    const [multiplier, setMultiplier] = useState(0);

    let requestRef: any = useRef();
    let previousTimeRef: any = useRef();

    const animate = (time: number) =>  {
        if (previousTimeRef.current === undefined) {
            const fps = 60;
            const timeInSeconds = options.duration / 1000;
            const totalFrames = timeInSeconds * 60;
            const mult = (fps / totalFrames) / 10;
            setMultiplier(mult);
        }
        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            setMarqueePosition(prevCount => (prevCount + deltaTime * multiplier) % 100);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [multiplier]);

    return (
        <div className={styles.marquee}>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
            <div className={styles.item} style={{  transform: `translate(-${marqueePosition}%, 0%) translate3d(0px, 0px, 0px` }}>
                {children} {marqueePosition}
            </div>
        </div>
    )
}