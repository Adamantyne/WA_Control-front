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

  function deleteAtributes(data) {
    delete data?.phoneNumbers;
    delete data?.userId;
    delete data?.id;
    delete data?.createAt
    delete data?.deleteAt
    if (!data?.establishment) delete data.establishment;
    if (!data?.address) delete data.address;
    if (!data?.phoneNumber1) delete data.phoneNumber1;
    if (!data?.phoneNumber2) delete data.phoneNumber2;
    if (!data?.phoneNumber3) delete data.phoneNumber3;
    if (!data?.description) delete data.description;
    return data;
  }

  return (
    <context.Provider value={{
      windowState,
      setWindowState,
      closeWindow,
      deleteAtributes,
      openWindow
    }}>
      {props.children}
    </context.Provider>
  );
}
export const getWindowContext = () => react.useContext(context);
