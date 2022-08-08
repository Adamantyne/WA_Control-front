import { useState, useEffect } from "react";
import styled from "styled-components";

import { getRequisition } from "../../../utils/api";
import HomePage from "../../layout/HomePage";
import { getContext } from "../../../hooks/UserContext";
import Button from "../../layout/Button";
import CustomerContainer from "./CustomerContainer";

export default function Customers() {
  const [customers, setCustomers] = useState("Carregando");
  const { contextData, windowState, setWindowState } = getContext();

  useEffect(() => {
    if (contextData.config) {
      getCustomers();
    }
  }, [contextData,windowState.isOpen]);

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
    <HomePage>
      <NewCustomerButton
        onClick={() =>
          setWindowState({ ...windowState, isOpen: true, type: "customer" })
        }
      >
        Criar cliente
      </NewCustomerButton>
      {typeof customers === "string"
        ? customers
        : customers.map((customer) => {
            return (
              <CustomerContainer
                key={customer.id}
                customerData={customer}
              ></CustomerContainer>
            );
          })}
    </HomePage>
  );
}

const NewCustomerButton = styled(Button)`
  max-width: 500px;
`;
