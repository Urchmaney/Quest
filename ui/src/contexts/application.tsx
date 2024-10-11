import { createContext, ReactNode, useContext, useState } from "react";
import formsMap from "../drawer/forms";

type DrawerFormKey = keyof typeof formsMap;

interface ApplicationState {
  drawer: {
    drawerOpen: boolean
    openDrawerFunc: (type: "default" | "md", defaultKey?: DrawerFormKey, mdFormString?: string ) => void,
    closeDrawer: () => void
    DrawerFormNode: JSX.Element
    drawerFormState: string
    setDrawerFormState: (state: string) => void
  }
}

const applicationDefault : ApplicationState= {
  drawer: {
    drawerOpen: false,
    closeDrawer : () => {},
    openDrawerFunc: () => {},
    DrawerFormNode: <></>,
    drawerFormState: "", 
    setDrawerFormState: () => {}
  }
}

const ApplicationContext = createContext<ApplicationState>(applicationDefault);

export const useApplicationContext = () => useContext(ApplicationContext);

export const ApplicationContextProvider = ({ children }: { children?: ReactNode | undefined }) => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const [DrawerNode, setDrawerNode] = useState<JSX.Element>(<></>);
  const [drawerFormState, setdDawerFormState] = useState("");
  const openDrawerFunc = (type = "default", defaultKey?: DrawerFormKey, mdFormString?: string) =>  {
    setDrawerState(true);
    if (type === "default") {
      if (!defaultKey) return;
      setDrawerNode(formsMap[defaultKey])
    } else {
      return mdFormString
    }
  }
  return (
    <ApplicationContext.Provider value={
      { 
        drawer: { 
          drawerOpen: drawerState, 
          openDrawerFunc: openDrawerFunc,
          closeDrawer: () => setDrawerState(false),
          DrawerFormNode: DrawerNode,
          drawerFormState: drawerFormState,
          setDrawerFormState: (state) => setdDawerFormState(state)
        }
      }
    }>
      {children}
    </ApplicationContext.Provider>

  )
}
