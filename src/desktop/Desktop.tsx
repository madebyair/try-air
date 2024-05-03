import WelcomeOverlay from "../welcome/WelcomeOverlay.tsx"
import Taskbar from "../taskbar/Taskbar.tsx"

const Desktop = () => {
    return (
        <div className="bg w-screen h-screen">
            <Taskbar />
            <WelcomeOverlay />
        </div>
    )
}

export default Desktop