import {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import styles from "./Marquee.module.scss"
import {MarqueeProps} from "./MarqueeProps";

export const Marquee: FC<MarqueeProps> = ({ children, options}) => {
    const [marqueeItemWidth, setMarqueeItemWidth] = useState(0);
    const [marqueeItemPosition, setMarqueeItemPosition] = useState(0);
    const [marqueeItemPositionMovement, setMarqueeItemPositionMovement] = useState(0);
    const requestRef: any = useRef();
    const marqueeElement = useRef(null);

    const animate = () =>  {
        setMarqueeItemPosition(prevCount => (
            (prevCount + marqueeItemPositionMovement) % marqueeItemWidth)
        );
        requestRef.current = requestAnimationFrame(animate);
    }

    useLayoutEffect(() => {
        if (marqueeElement.current) {
            setMarqueeItemWidth(
                // todo: recalculate this on resize.
                (marqueeElement.current["offsetWidth"] / options.numberOfItems )
            );
        }
    }, [options.numberOfItems]);

    useEffect(() => {
        if (marqueeItemWidth !== 0) {
            const fps = 60;
            const timeInSeconds = options.duration / 1000;
            setMarqueeItemPositionMovement(marqueeItemWidth / timeInSeconds / fps)
        }

    }, [marqueeItemWidth, options.duration]);

    useEffect(() => {
        if (marqueeItemPositionMovement !== 0) {
            requestRef.current = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(requestRef.current);
        }
    }, [marqueeItemPositionMovement]);

    const getMarqueeContent = (numberOfItems: number) => {
        let content = []
        for (let i = 0; i < numberOfItems; i++) {
            content.push(
                <div key={i} className={styles.item} style={{ transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -${marqueeItemPosition}, 0, 0, 1)` }}>
                    {children}
                </div>
            )
        }
        return content
    }

    return (
        <div ref={marqueeElement} className={styles.marquee}>
            {getMarqueeContent(options.numberOfItems)}
        </div>
    )
}