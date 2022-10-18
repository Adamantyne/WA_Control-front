import { useState, useEffect } from "react";

import { getRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import DefaultScreen from "../../layout/DefaultScreen";
import Loader from "../../layout/MicroElements/Loader";
import CustomerContainer from "./CustomerContainer";
import NewElementButton from "../../layout/MicroElements/NewElementButton";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";

export default function Customers() {
  const [customers, setCustomers] = useState("Carregando");
  const { contextData } = getContext();
  const { windowState, openWindow } = getWindowContext();

  useEffect(() => {
    if (contextData.config) {
      getCustomers();
    }
  }, [contextData, windowState.isOpen]);

  async function getCustomers() {
    try {
      const response = await getRequisition("customers", contextData);
      if (response.length === 0) {
        setCustomers("Não há clientes cadastrados");
      } else {
        setCustomers(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContainer>
      <DefaultScreen>
        <NewElementButton
          onClick={() => {
            openWindow("customer");
          }}
        >
          Criar cliente
        </NewElementButton>
        {typeof customers === "string" ? (
          customers === "Carregando" ? (
            <Loader />
          ) : (
            <h2>{customers}</h2>
          )
        ) : (
          customers.map((customer) => {
            return (
              <CustomerContainer
                key={customer.id}
                customerData={customer}
              ></CustomerContainer>
            );
          })
        )}
      </DefaultScreen>
    </GlobalContainer>
  );
}
