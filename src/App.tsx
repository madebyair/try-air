import "./App.css"
import Desktop from "./desktop/Desktop.tsx"

function App() {
    return (
        <div className="select-none" onClick={() => document.getElementById("root")?.requestFullscreen()}>
            <Desktop />
        </div>
    )
}

export default App
