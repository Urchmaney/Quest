import { Form, useFetcher } from "react-router-dom";
import { Loader } from "../../assets/loader";
import { useEffect, useRef, useState } from "react";
import { useApplicationContext } from "../../contexts/application";

const CreateHackathon = () => {
  const fetcher = useFetcher({ key: "create-hackathon" });
  const { drawer: { closeDrawer } } = useApplicationContext();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setError] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (fetcher.state === "loading") {
      if (fetcher.data?.status === 201) {
        closeDrawer();
        formRef.current?.reset();
      }
      else{
        setError(fetcher.data)
      }
    }

  }, [fetcher.state])
  return (
    <div>
      <div className="px-3">
        {
          Object.keys(errors).map(errKey => (
            <div>
              <p>{errKey}</p>
              <ul>
                {
                  errors[errKey].map(err => (
                    <li className="text-secondary">
                      {
                        err
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <Form className="flex flex-col gap-3 p-3" method="post" navigate={false} fetcherKey="create-hackathon" ref={formRef}>
        <div>
          <label className="text-lg font-bold text-gray" htmlFor="hackathonName">Hackathon Name</label>
          <input name="hackathonName" type="text" className="w-full px-5 h-16 border border-lightgray rounded-md outline-none text-xl" placeholder="Hackathon Name" required />
        </div>

        <div>
          <label className="text-lg font-bold text-gray" htmlFor="hackathonDescription">Description</label>
          <textarea name="hackathonDescription" className="w-full px-4 py-4 h-16 border border-lightgray rounded-md outline-none text-xl min-h-48" rows={50}>

          </textarea>
        </div>

        <div>
          <button type="submit" value={'Create Hackathon'} className="w-full text-center px-5 h-16 rounded-md outline-none text-xl bg-primary text-white cursor-pointer flex justify-center items-center" >
            {fetcher.state === "submitting" ? <Loader size={50} /> : <span>Create Hackathon</span>}
          </button>
        </div>
      </Form>
    </div>
  )
};

const map = { "create-hackathon": <CreateHackathon /> };

export default map;
