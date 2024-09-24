import MarkdownView from "react-showdown"

export const HackathonDetail = () => {
  const value = `## Home**`
  return (

    <div className="relative">
      <div className="bg-primary h-28">
      </div>
      <div className="max-w-container mx-auto">
        <div className="h-[calc(100vh-200px)] bg-lightgray">
          <div className="container mx-auto h-full bg-lightgray">
            <div className="bg-white h-[calc(100vh-100px)] relative top-[-100px]">
              <MarkdownView
                markdown={value || ""}
                options={{ tables: true, emoji: true }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}