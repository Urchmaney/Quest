import MDEditor from "@uiw/react-md-editor";
import MarkdownView from 'react-showdown'
// import trashSvg from "../../../../assets/trash.svg";
import warningSvg from "../assets/warning.svg";
import { useState } from "react";

export const ManageHackathonEditor = () => {
  const [preview, setPreview] = useState(false);
  return (
    <div className="max-w-container mx-auto">
      <div className=" h-[calc(100vh-86px)]">
        <div className="container mx-auto h-full">
          <div className="flex justify-between py-5">
            <p className="text-black text-2xl font-semibold pt-3">
              Bulk Hackathon
            </p>
            <button onClick={() => setPreview(!preview)} className="px-4 rounded bg-secondary text-white">
              {preview ? 'Edit' : 'Preview'}
            </button>
          </div>
          <div className="overflow-y-scroll no-scrollbar py-6 flex flex-col gap-6 h-[calc(100%-100px)]">
            <Editor preview={preview} />
            {/* <ZerState /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

const Editor = ({ preview }: { preview: boolean }) => {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div className="bg-white flex justify-center items-center rounded-md w-full h-full text-center">
      {
        preview ?
          <div className="w-full h-full text-start">
            <MarkdownView
              markdown={value || ""}
              options={{ tables: true, emoji: true }}
            />
          </div>
          :
          <MDEditor
            value={value}
            onChange={setValue}
            className="w-full h-full"
            preview="edit"
          />


      }
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      {false && <ZerState />}
    </div>
  )
}

const ZerState = () => {
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