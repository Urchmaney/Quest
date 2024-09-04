import logoPng from "../../assets/logo.png";

export const Home = () => {
    return (
        <div className="container mx-auto h-screen">
            <header className="flex justify-between py-5 px-2">
                <div className="flex items-center gap-1">
                    <img src={logoPng} className="" />
                    <p className="font-semibold text-lg">UEST</p>
                </div>
                <div className="flex gap-5 items-center">
                    <button className="bg-transparent underline text-base" type="button"><a className="text-base font-semibold">Login</a></button>
                    <button className="bg-secondary text-white px-8 py-2 text-base rounded-sm" type="button">Register</button>
                </div>
            </header>
            <main className="flex flex-col justify-between pt-20 h-[calc(100vh-90px)]">
                <div className="text-center flex flex-col items-center gap-10 h-[50%] justify-center">
                    <h1 className="text-3xl md:text-6xl font-bold text-wrap">HOST HACKATHON</h1>
                    <p className="max-w-md md:max-w-[60%] text-sm md:text-lg">
                        All you need to run a successful hackathon such as participant registration, team matchmaking, event timeline, internal chat and more
                    </p>
                    <div>
                        <button className="bg-secondary text-white p-3 px-5 rounded-md">
                            Host Hackathon
                        </button>
                    </div>
                </div>

                <div className="bg-webinar flex-grow bg-no-repeat bg-bottom">

                </div>
            </main>
        </div>
    )
}