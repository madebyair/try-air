import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "../translations/en.json"

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en }
        },
        lng: navigator.language.split("-")[0],
        fallbackLng: "en",
        debug: window.location.hostname === "localhost",
    })

ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />
)
