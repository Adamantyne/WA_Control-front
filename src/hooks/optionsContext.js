import react from "react";

const context = react.createContext();

export function ProviderOptions(props) {
    const [optionsInfos, setOptionsInfos] = react.useState({
        isOpen: false,
        currentOptions: "",
    });

    return (
        <context.Provider value={{
            optionsInfos,
            setOptionsInfos
        }}>
            {props.children}
        </context.Provider>
    );
}
export const getOptionsContext = () => react.useContext(context);
