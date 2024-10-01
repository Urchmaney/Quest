import JsxParser from 'react-jsx-parser';
import { Converter, extension } from "showdown";
import { Link } from 'react-router-dom';


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
  const value = `
# Home
![image info](https://img.freepik.com/free-vector/hackathon-doodle-hand-drawing-team-programmers-web-developers-managers-graphic-designers-deve_88138-1348.jpg?t=st=1727391066~exp=1727394666~hmac=fb9598fd7fc9b60488364bc461d31f8e551f171480d3d3740048997405f16382&w=900)
[Please Support us!](https://patreon.com/showdownjs)
> Another problem
  [Introduction](?now)
  `
  const converter = new Converter({ extensions: ['link'] });
  const result = converter.makeHtml(value);
  
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