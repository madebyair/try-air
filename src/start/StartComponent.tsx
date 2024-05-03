const StartComponent = ({show} : {show: boolean}) => {
    return (
        <div className="start w-[700px] h-[600px] z-50 absolute bottom-12 left-12">
            <div className={show ? "start bg-slate-200/85 dark:bg-zinc-950/85 w-full h-full rounded-xl select-none transition duration-300" : "start transition duration-300 w-full h-full rounded-xl select-none"}>
                <div className="mx-4 pt-2 grid grid-cols-4 gap-4 justify-items-center">
                </div>
            </div>
        </div>
    )
}

export default StartComponent