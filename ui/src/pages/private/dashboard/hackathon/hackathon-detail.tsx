import { Link } from "react-router-dom"
import MarkdownView from "react-showdown"

export const HackathonDetail = () => {
  const value = `
  ![Alt text](https://raise.mit.edu/wp-content/uploads/2024/03/Registration-Launch-Email-Banner.svg =1500x550)
  ## Home** [show](/dashboard/hackathons/3?form=me)
  `
  return (

    <div className="relative">
      <div className="bg-primary h-28">
      </div>
      <div className="max-w-container mx-auto">
        <div className="h-[calc(100vh-200px)] bg-lightgray">
          <div className="container mx-auto h-full bg-lightgray">
            <div className="bg-white h-[calc(100vh-100px)] relative top-[-100px]">
              <Link to={`?form=rr`}>too</Link>
              {/* <a href="?form=rr">hon</a> */}
              <MarkdownView
                extensions={[
                  {
                    type: "output",
                    regex: new RegExp(`<a(.*)href="(.*)"(.*)>(.*)</a>`, 'g'),
                    replace: `<Link to="$2">$4</Link>`
                  }
                ]
                }
                markdown={value || ""}
                sanitizeHtml={(html) => {
                  console.log(html)
                  return html
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}