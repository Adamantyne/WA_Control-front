import react from "react";

const context = react.createContext();

export function ProviderSidebar(props) {
    const [sidebarIsOpen, setSidebarIsOpen] = react.useState(false);

    return (
        <context.Provider value={{
            sidebarIsOpen,
            setSidebarIsOpen
        }}>
            {props.children}
        </context.Provider>
    );
}
export const getSidebarContext = () => react.useContext(context);
