import { useState, useEffect } from "react";
import styled from "styled-components";

import { getRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import DefaultScreen from "../../layout/DefaultScreen";
import Button from "../../layout/MicroElements/Button";
import Loader from "../../layout/MicroElements/Loader";
import CustomerContainer from "./CustomerContainer";

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
    <DefaultScreen>
      <NewCustomerButton
        onClick={() => {
          openWindow("customer");
        }}
      >
        Criar cliente
      </NewCustomerButton>
      {typeof customers === "string"
        ? <Loader />
        : customers.map((customer) => {
            return (
              <CustomerContainer
                key={customer.id}
                customerData={customer}
              ></CustomerContainer>
            );
          })}
    </DefaultScreen>
  );
}

const NewCustomerButton = styled(Button)`
  max-width: var(--page-max-width);
`;
