

export const Home = () => {
    return (

        <main className="flex flex-col justify-between pt-20 h-[calc(100vh-90px)]">
            <div className="text-center flex flex-col items-center gap-10 h-[50%] justify-center">
                <h1 className="text-7xl md:text-9xl font-bold text-wrap tracking-tighter">HOST HACKATHON</h1>
                <p className="max-w-md md:max-w-[60%] text-xl md:text-2xl">
                    All you need to run a successful hackathon such as participant registration, team matchmaking, event timeline, internal chat and more
                </p>
                <div>
                    <button className="bg-primary text-white p-3 px-14 rounded-md">
                        Host Hackathon
                    </button>
                </div>
            </div>

            <div className="bg-webinar flex-grow bg-no-repeat bg-bottom">

            </div>
        </main>


    )
}