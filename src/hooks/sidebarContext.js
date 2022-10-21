import react from "react";

const context = react.createContext();

export function ProviderSidebar(props) {
    const [sidebarInfos, setSidebarInfos] = react.useState({
        isOpen: false,
        currentPage: ""
    });

    return (
        <context.Provider value={{
            sidebarInfos,
            setSidebarInfos
        }}>
            {props.children}
        </context.Provider>
    );
}
export const getSidebarContext = () => react.useContext(context);
