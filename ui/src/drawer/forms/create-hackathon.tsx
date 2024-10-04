import { Form } from "react-router-dom";

const CreateHackathon = () => (
  <div>
    <Form className="flex flex-col gap-3 p-3" action="/dashboard/manage" method="post">
      <div>
        <label className="text-lg font-bold text-gray" htmlFor="hackathonName">Hackathon Name</label>
        <input name="hackathonName" type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Hackathon Name" required />
      </div>

      <div>
        <label className="text-lg font-bold text-gray"  htmlFor="hackathonDescription">Description</label>
        <textarea name="hackathonDescription" className="w-full px-4 py-4 h-16 border border-lightgray rounded-md outline-none text-xl min-h-48" rows={50}>

        </textarea>
      </div>

      <div>
        <input type="submit" value={'Create Hackathon'} className="w-full text-center px-5 h-16 rounded-md outline-none text-xl bg-primary text-white cursor-pointer flex justify-center items-center" />
      </div>

    </Form>
  </div>
);

const map = { "create-hackathon": CreateHackathon };

export default map;
