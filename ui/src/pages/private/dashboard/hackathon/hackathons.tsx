import { useState } from "react"
import { Link } from "react-router-dom"

const filterListType = ["all", "active", "history"] as const
type Filter = {
    listType: typeof filterListType[number]
    search: string
}

export const Hackathons = () => {
    const [filter, setFilter] = useState<Filter>({ listType: "all", search: "" });
    return (
        <div className="px-4 mx-auto">
            <div className="py-8">
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <div className="flex justify-evenly flex-wrap gap-6 pt-4">
                <Hackathon />

                <Hackathon />

                <Hackathon />

                <Hackathon />
            </div>
        </div>
    )
}

const Hackathon = () => {
    return (
        <Link to={"/dashboard/hackathons/6"} className="md:w-[30%]">
            <div className="cursor-pointer" onClick={() => { console.log("clicks") }}>
                <div className="h-56">
                    <img className="w-full h-full" src="https://www.shutterstock.com/shutterstock/photos/2475980209/display_1500/stock-vector-hackathon-glitched-word-banner-hud-hologram-cyberpunk-style-neon-tech-hackathon-glitch-background-2475980209.jpg" />
                </div>
                <div className="bg-primary text-white p-4">
                    <div className="">
                        <p className="text-xl font-medium"> Untitle Hackathon</p>
                    </div>
                    <div className="flex justify-end gap-4 py-3 ">
                        <p className=" rounded-md bg-secondary flex items-center justify-center px-5 py-2 leading-[0.7] text-sm ">
                            make
                        </p>
                        <span className="rounded-md bg-secondary flex items-center justify-center px-5 py-2 leading-[0.7] text-sm">
                            another
                        </span>
                        <span className="rounded-md bg-secondary flex items-center justify-center px-5 py-2 leading-[0.7] text-sm">
                            save
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const Filter = ({ filter, setFilter }: { filter: Filter, setFilter: (filter: Filter) => void }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="bg-lightgray p-3 px-7 rounded-md flex gap-3">
                {
                    filterListType.map((t) => (
                        <button
                            key={t}
                            className={`px-7 py-2 capitalize ${filter.listType === t.toLowerCase() ? "bg-secondary text-white" : "text-gray"} rounded-md font-medium`}
                            onClick={() => setFilter({ ...filter, listType: t })}
                        >
                            {t}
                        </button>
                    ))
                }
            </div>

            <div>
                <div className="flex rounded-full border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif] w-[500px] h-14">
                    <input type="email" placeholder="Search Something..." className="w-full outline-none bg-lightgray text-gray text-xl px-4 py-3" onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
                    <button type='button' className="flex items-center justify-center bg-lightgray px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" className="fill-gray">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}