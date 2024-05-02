import { useTranslation } from "react-i18next"

const WelcomeModal = () => {
    const [ t ] = useTranslation()

    return (
        <div className="w-[800px] h-[500px] bg-black rounded-xl text-white">
            {t("Welcome")}
        </div>
    )
}

export default WelcomeModal