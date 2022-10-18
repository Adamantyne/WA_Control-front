import { useState, useEffect } from "react";

import { getRequisition } from "../../../utils/api";
import DefaultScreen from "../../layout/DefaultScreen";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import ServiceContainer from "./ServiceContainer";
import Loader from "../../layout/MicroElements/Loader";
import NewElementButton from "../../layout/MicroElements/NewElementButton";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";

export default function Services() {
  const [services, setServices] = useState("Carregando");
  const { contextData } = getContext();
  const { windowState, openWindow } = getWindowContext();

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
    <GlobalContainer>
      <DefaultScreen>
        <NewElementButton
          onClick={() => {
            openWindow("service");
          }}
        >
          Criar serviço
        </NewElementButton>
        {typeof services === "string" ? (
          services === "Carregando" ? (
            <Loader />
          ) : (
            <h2>{services}</h2>
          )
        ) : (
          services.map((service) => {
            return (
              <ServiceContainer
                key={service.id}
                serviceData={service}
              ></ServiceContainer>
            );
          })
        )}
      </DefaultScreen>
    </GlobalContainer>
  );
}
