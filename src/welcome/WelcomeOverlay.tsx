import WelcomeModal from "./WelcomeModal.tsx"

const WelcomeOverlay = () => {
    return (
        <div className="absolute w-screen h-screen bg-slate-200/50 dark:bg-zinc-950/50 flex">
            <div className="m-auto">
                <WelcomeModal />
            </div>
        </div>
    )
}

export default WelcomeOverlay