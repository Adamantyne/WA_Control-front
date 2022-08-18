import react from "react";

const context = react.createContext();

export function ProviderWindow(props) {
  
  const [windowState, setWindowState] = react.useState({ 
    id: undefined,
    type:undefined,
    isOpen:false
  });

  function closeWindow() {
    setWindowState({
      isOpen: false,
      type: undefined,
      id: undefined,
    });
  }
  function openWindow(type,id=undefined) {
    setWindowState({
      isOpen: true,
      type: type,
      id: id,
    });
  }


  return (
    <context.Provider value={{
      windowState,
      setWindowState,
      closeWindow,
      openWindow
    }}>
      {props.children}
    </context.Provider>
  );
}
export const getWindowContext = () => react.useContext(context);
