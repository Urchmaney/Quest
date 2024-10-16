import JsxParser from 'react-jsx-parser';
import { Converter, extension } from "showdown";
import { Link, useLoaderData } from 'react-router-dom';


extension('link', {
  type: "output",
  regex: new RegExp(`<a(.*)href="(.*)"(.*)>(.*)</a>`, "g"),
  replace: `<MRLink to="$2" text="$4" />`
})


function MRLink({ text, to }: { text?: string, to?: string }) {
  return (
    <Link to={to || "#"}>{text || ""}</Link>
  )
}

export const HackathonDetail = () => {
  const hackathonUI = useLoaderData() as string;
  const converter = new Converter({ extensions: ['link'] });
  const result = converter.makeHtml(hackathonUI);
  
  return (

    <div className="relative">
      <div className="bg-primary h-28">
      </div>
      <div className="max-w-container mx-auto">
        <div className="h-[calc(100vh-200px)] bg-lightgray">
          <div className="container mx-auto h-full bg-lightgray">
            <div className="bg-white h-[calc(100vh-100px)] relative top-[-100px] rounded-md overflow-y-auto ">
              <JsxParser components={{ MRLink }} jsx={result} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}