import trashSvg from "../assets/trash.svg";
import warningSvg from "../assets/warning.svg";
import { useApplicationContext } from "../contexts/application";
import { useLoaderData } from "react-router-dom";
import { Hackathon } from "../interfaces/hackathon";


export const ManageHackathons = () => {
  const ownHackathons: Hackathon[] = (useLoaderData() || []) as Hackathon[];
  const { drawer: { openDrawerFunc } } = useApplicationContext();

  const clickCreateHackathon = () => {
    openDrawerFunc("default", "create-hackathon")
  }
  return (
    <div className="max-w-container mx-auto">
      <div className=" h-[calc(100vh-86px)]">
        <div className="container mx-auto h-full">
          <div className="flex justify-end py-5">
            <button className="bg-secondary text-white p-3 px-5" onClick={clickCreateHackathon} >
              Create Hackathon
            </button>
          </div>
          <div className="overflow-y-scroll no-scrollbar py-6 flex flex-col gap-6 h-[calc(100%-100px)]">
            {
              ownHackathons.length && ownHackathons.map((hackathon, index) => (
                <ManageHackathon 
                  key={`ownedhackathon${index}`} 
                  title={hackathon.title} 
                  description={hackathon.description}
                />))
            }
            {
              !ownHackathons.length && <ZeroState />
            }
          </div>
        </div>
      </div>
    </div>

  )
}

const ManageHackathon = ({ title, description }: Hackathon) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex justify-between items-center py-2">
        <h3 className="text-2xl font-medium">
          {title}
        </h3>
        <div className="flex items-center bg-transparent gap-2">
          <button className="bg-white text-gray font-medium">
            <a>Preview</a>
          </button>
          <button className="bg-white">
            <img src={trashSvg} />
          </button>
        </div>
      </div>
      <hr className="text-lightgray my-3" />
      <p className="py-3">
        {description}
      </p>
    </div>
  )
}

const ZeroState = () => {
  return (
    <div className="bg-white flex justify-center items-center rounded-md w-full h-full text-center">
      <div className="flex flex-col items-center gap-10">
        <img src={warningSvg} />
        <div>
          <p className="text-2xl font-semibold">
            No markdown interface
          </p>
          <p className="text-xl text-gray">
            Create a new markdown inteface or select templates
          </p>
        </div>

        <div>
          <button className="bg-secondary text-white p-3 px-5">
            Write Markdown Interface
          </button>
        </div>
      </div>
    </div>
  )
}