const TooSmall = () => {
    return (
        <div className="w-screen h-screen bg-black text-white hidden max-xl:flex absolute top-0 left-0 z-[100]">
            <span className="m-auto">Try Air requires at least 720p display</span>
        </div>
    )
}

export default TooSmall