import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main className="flex flex-col justify-between grow">
      <div className="text-center flex flex-col items-center gap-10 h-[50%] justify-center">
        <h1 className="text-4xl md:text-7xl xl:text-9xl font-bold text-wrap tracking-tighter">HOST HACKATHON</h1>
        <p className="max-w-md md:max-w-[60%] text-xl md:text-2xl">
          All you need to run a successful hackathon such as participant registration, team matchmaking, event timeline, internal chat and more
        </p>
        <div>
          <button className="bg-primary text-white p-3 px-14 rounded-md">
            <Link className="hover:text-white" to={"/register"}>Host Hackathon</Link>
          </button>
        </div>
      </div>

      <div className="bg-webinar flex-grow bg-no-repeat bg-bottom">

      </div>
    </main>
  )
}