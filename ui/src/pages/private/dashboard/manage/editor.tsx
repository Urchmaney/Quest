import MDEditor from "@uiw/react-md-editor";
// import trashSvg from "../../../../assets/trash.svg";
import warningSvg from "../../../../assets/warning.svg";
import { useState } from "react";

export const ManageHackathonEditor = () => {
    return (
        <div className="bg-lightgray h-[calc(100vh-86px)]">
            <div className="container mx-auto h-full">
                <div className="flex justify-start py-5">
                    <p className="text-black text-2xl font-semibold pt-3">
                        Bulk Hackathon
                    </p>
                </div>
                <div className="overflow-y-scroll no-scrollbar py-6 flex flex-col gap-6 h-[calc(100%-100px)]">
                    <Editor />
                    {/* <ZerState /> */}
                </div>
            </div>
        </div>
    )
}

const Editor = () => {
    const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
    return (
        <div className="bg-white flex justify-center items-center rounded-md w-full h-full text-center">
            <MDEditor
                value={value}
                onChange={setValue}
                className="w-full h-full"
                preview="edit"
            />
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
            { false && <ZerState /> }
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