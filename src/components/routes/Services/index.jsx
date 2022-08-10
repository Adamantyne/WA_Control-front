import { useState, useEffect } from "react";
import styled from "styled-components";

import { getRequisition } from "../../../utils/api";
import HomePage from "../../layout/HomePage";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import Button from "../../layout/Button";
import ServiceContainer from "./ServiceContainer";
import Loader from "../../layout/Loader";

export default function Services() {
  const [services, setServices] = useState("Carregando");
  const { contextData } = getContext();
  const { windowState,  openWindow } = getWindowContext();

  useEffect(() => {
    if (contextData.config) {
      getServices();
    }
  }, [contextData, windowState.isOpen]);

  async function getServices() {
    try {
      const response = await getRequisition("services", contextData);
      if (response.length === 0) {
        setServices("Não há serviços cadastrados");
      } else {
        setServices(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <HomePage>
      <NewServiceButton
        onClick={() => {
          openWindow("service");
        }}
      >
        Criar serviço
      </NewServiceButton>
      {typeof services === "string"
        ? <Loader />
        : services.map((service) => {
            return (
              <ServiceContainer
                key={service.id}
                serviceData={service}
              ></ServiceContainer>
            );
          })}
    </HomePage>
  );
}

const NewServiceButton = styled(Button)`
  max-width: var(--page-max-width);
`;
