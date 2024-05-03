import WelcomeModal from "./WelcomeModal.tsx"
import { useState } from "react"

const WelcomeOverlay = () => {
    const [hide, setHide] = useState<boolean>(false)

    if (hide) return

    return (
        <div className="absolute w-screen h-screen bg-slate-200/50 dark:bg-zinc-950/50 flex z-50">
            <div className="m-auto">
                <WelcomeModal hide={setHide} />
            </div>
        </div>
    )
}

export default WelcomeOverlay