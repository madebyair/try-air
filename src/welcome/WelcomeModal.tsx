import { useTranslation } from "react-i18next"

const WelcomeModal = () => {
    const [ t ] = useTranslation()

    return (
        <div className="w-[800px] h-[500px] bg-slate-300 dark:bg-black rounded-xl dark:text-white">
            {t("Welcome")}
        </div>
    )
}

export default WelcomeModal