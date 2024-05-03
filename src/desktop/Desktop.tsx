import WelcomeOverlay from "../welcome/WelcomeOverlay.tsx"
import Taskbar from "../taskbar/Taskbar.tsx"
import TooSmall from "../TooSmall.tsx"

const Desktop = () => {
    return (
        <div className="bg w-screen h-screen">
            <TooSmall />
            <Taskbar />
            <WelcomeOverlay />
        </div>
    )
}

export default Desktop