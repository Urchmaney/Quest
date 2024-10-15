import trashSvg from "../assets/trash.svg";
import warningSvg from "../assets/warning.svg";
import cogWheel from "../assets//cog.svg";
import { useApplicationContext } from "../contexts/application";
import { Form, Link, useLoaderData } from "react-router-dom";
import { Hackathon } from "../interfaces/hackathon";


export const ManageHackathons = () => {
  const ownHackathons: Hackathon[] = (useLoaderData() || []) as Hackathon[];
  const { drawer: { openDrawerFunc } } = useApplicationContext();

  const createHackathon = () => {
    openDrawerFunc("default", "create-hackathon")
  }
  return (
    <div className="max-w-container mx-auto">
      <div className=" h-[calc(100vh-86px)]">
        <div className="container mx-auto h-full">
          <div className="flex justify-end py-5">
            <button className="bg-secondary text-white p-3 px-5" onClick={createHackathon} >
              Create Hackathon
            </button>
          </div>
          <div className="overflow-y-scroll no-scrollbar py-6 flex flex-col gap-6 h-[calc(100%-100px)]">
            {
              !!ownHackathons.length && ownHackathons.map((hackathon, index) => (
                <ManageHackathon
                  key={`ownedhackathon${index}`}
                  hackathon={hackathon}
                />))
            }
            {
              !ownHackathons.length && <ZeroState createHackathonFunc={createHackathon} />
            }
          </div>
        </div>
      </div>
    </div>

  )
}

const ManageHackathon = ({ hackathon }: { hackathon: Hackathon }) => {
  const { id, title, description } = hackathon;

  return (
    <div className="bg-white p-5 rounded-md">
      <div className="flex justify-between items-center py-2">
        <h3 className="text-2xl font-medium">
          {title}
        </h3>
        <div className="flex items-center bg-transparent gap-2">
          <button className="bg-white text-gray font-medium">
            <Link to={"#"}>Preview</Link>
          </button>
          <Form method="delete" className="flex items-center justify-center" >
            <button className="bg-white" type="submit" name="id" value={id}>
              <img src={trashSvg} />
            </button>
          </Form>
          <button className="bg-white">
            <Link to={`${id}/editor`} state={{ hackathon }}>
              <img src={cogWheel} />
            </Link>
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

const ZeroState = ({ createHackathonFunc }: { createHackathonFunc: () => void }) => {
  return (
    <div className="bg-white flex justify-center items-center rounded-md w-full h-full text-center">
      <div className="flex flex-col items-center gap-10">
        <img src={warningSvg} />
        <div>
          <p className="text-2xl font-semibold">
            No Hackathons.
          </p>
          <p className="text-xl text-gray">
            Create a new Hackathon
          </p>
        </div>

        <div>
          <button className="bg-secondary text-white p-3 px-5" onClick={createHackathonFunc}>
            Create Hackathon
          </button>
        </div>
      </div>
    </div>
  )
}