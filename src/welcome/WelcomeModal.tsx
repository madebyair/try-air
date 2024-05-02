import { useTranslation } from "react-i18next"

const WelcomeModal = () => {
    const [ t ] = useTranslation()

    return (
        <div className="w-[800px] h-[500px] bg-slate-300 dark:bg-black rounded-xl dark:text-white p-16">
            <h1 className="text-6xl font-bold dark:text-white">{t("Welcome")}</h1>
            <p className="w-96 font-bold mt-6">{t("Welcome to Try Air! A web application that will allow you to test Airos directly in your browser.")}</p>
            <p className="mt-2 w-96">{t("Please remember that the Airos system and this application are still under development and this application may not be up to date with the Airos system interface.")}</p>
        </div>
    )
}

export default WelcomeModal