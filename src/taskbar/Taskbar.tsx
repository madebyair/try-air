// @ts-ignore
import airsmallBlack from "../assets/airsmall-black.webp"
// @ts-ignore
import airsmallWhite from "../assets/airsmall-white.webp"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import StartComponent from "../start/StartComponent.tsx"

const Taskbar = () => {
    const [, i18n] = useTranslation()
    const [showStart, setShowStart] = useState<boolean>(false)

    function onStartClick() {
        setShowStart(prevState => !prevState)
    }

    function onActionsClick() {
        // TODO
    }

    const [time, setTime] = useState(() => {
        const now = new Date()

        const timeFormat = new Intl.DateTimeFormat(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: i18n.language === "en"
        })

        return timeFormat.format(now)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(() => {
                const now = new Date()
                const timeFormat = new Intl.DateTimeFormat(undefined, {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: i18n.language === "en"
                })

                return timeFormat.format(now)
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-screen bg-zinc-300 dark:bg-zinc-950 h-10 z-10 flex absolute bottom-0">
            <StartComponent show={showStart} />
            <div className="mx-6 flex h-8 my-auto z-10">
                <div
                    className="flex mx-2 rounded-md hover:bg-zinc-400 dark:hover:bg-zinc-800 transition duration-300 h-8 w-8" onClick={() => onStartClick()}>
                    <img src={airsmallBlack} alt="" className="block dark:hidden"/>
                    <img src={airsmallWhite} alt="" className="hidden dark:block"/>
                </div>
            </div>
            <div className="absolute mx-12 right-0 text-white h-10 flex">
                <div className="h-8 w-24 my-auto flex rounded-md hover:bg-zinc-400 dark:hover:bg-zinc-800 transition duration-300" onClick={() => onActionsClick()}>
                    <span className="m-auto">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default Taskbar