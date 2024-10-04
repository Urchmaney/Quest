import { createContext, ReactNode, useContext, useState } from "react";
import formsMap from "../drawer/forms";

type DrawerFormKey = keyof typeof formsMap;

interface ApplicationState {
  drawer: {
    drawerOpen: boolean
    openDrawerFunc: (type: "default" | "md", defaultKey?: DrawerFormKey, mdFormString?: string ) => void,
    closeDrawer: () => void
    drawerFormNode: ReactNode | undefined
  }
}

const applicationDefault : ApplicationState= {
  drawer: {
    drawerOpen: false,
    closeDrawer : () => {},
    openDrawerFunc: () => {},
    drawerFormNode: <></>
  }
}

const ApplicationContext = createContext<ApplicationState>(applicationDefault);

export const useApplicationContext = () => useContext(ApplicationContext);

export const ApplicationContextProvider = ({ children }: { children?: ReactNode | undefined }) => {
  const [drawerState, setDrawerState] = useState<boolean>(false);
  const [drawerNode, setDrawerNode] = useState(<></>);
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
          drawerFormNode: drawerNode
        }
      }
    }>
      {children}
    </ApplicationContext.Provider>

  )
}
