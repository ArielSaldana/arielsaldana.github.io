import React, {createContext, FC, useEffect, useState} from 'react'
// import LocomotiveScroll from "locomotive-scroll";
import {any, string} from "prop-types";

export let SmoothScrollContext: React.Context<{ scroll: any }>;
SmoothScrollContext = createContext({
    scroll: any
});

interface Options {
    smooth: boolean
}

interface Props {
    children: React.ReactNode,
    options: Options
}

// @ts-ignore
export const SmoothScrollProvider: FC<Props> = ({ children, options }) => {
    const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

    useEffect(() => {
        if (!scroll) {
            ;(async () => {
                try {
                    console.log(options);
                    const LocomotiveScroll = (await import('locomotive-scroll')).default
                    setScroll(
                        new LocomotiveScroll({
                            el: document.querySelector('[data-scroll-container]') as HTMLElement | undefined,
                            ...options,
                        })
                    )
                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`)
                }
            })()
        }

        return () => {
            scroll && scroll.destroy()
        }
    }, [scroll]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <SmoothScrollContext.Provider value={{ scroll }}>{children}</SmoothScrollContext.Provider>
    )
}

SmoothScrollContext.displayName = 'SmoothScrollContext'
SmoothScrollProvider.displayName = 'SmoothScrollProvider'
