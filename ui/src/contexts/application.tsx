import { createContext, ReactNode, useContext, useState } from "react";

interface ApplicationState {
  drawer: {
    openDrawer: boolean
    setOpenDrawer: (state: boolean) => void
    node: ReactNode | undefined
    setNode: (node: ReactNode) => void
  }
}


const ApplicationContext = createContext<ApplicationState>({ drawer: { openDrawer: false, setOpenDrawer: () => { }, node: undefined, setNode: () => {} } });

export const useApplicationContext = () => useContext(ApplicationContext);

export const ApplicationContextProvider = ({ children }: { children?: ReactNode | undefined }) => {
  const [drawerState, setDrawerState] = useState<{ open: boolean, node: ReactNode | undefined }>({ open: false, node: undefined });
  return (
    <ApplicationContext.Provider value={
      { 
        drawer: { 
          openDrawer: drawerState.open, 
          setOpenDrawer: (state: boolean) => setDrawerState((s) => ({ ...s, open: state })),
          node: drawerState.node ,
          setNode: (node: ReactNode) =>  setDrawerState((s) => ({ ...s, node: node }))
        }
      }
    }>
      {children}
    </ApplicationContext.Provider>

  )
}
