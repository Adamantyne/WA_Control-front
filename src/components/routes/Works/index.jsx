import { useState, useEffect } from "react";

import { getRequisition } from "../../../utils/api";
import DefaultScreen from "../../layout/DefaultScreen";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import WorkContainer from "./WorkContainer";
import Loader from "../../layout/MicroElements/Loader";
import NewElementButton from "../../layout/MicroElements/NewElementButton";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";

export default function Works() {
  const [works, setWorks] = useState("Carregando");
  const { contextData } = getContext();
  const { windowState, openWindow } = getWindowContext();

  useEffect(() => {
    if (contextData.config) {
      getWorks();
    }
  }, [contextData, windowState.isOpen]);

  async function getWorks() {
    try {
      const response = await getRequisition("works", contextData);
      if (response.length === 0) {
        setWorks("Não há trabalhos cadastrados");
      } else {
        setWorks(response);
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
            openWindow("createWork");
          }}
        >
          Criar trabalho
        </NewElementButton>
        {typeof works === "string" ? (
          works === "Carregando" ? (
            <Loader />
          ) : (
            <h2>{works}</h2>
          )
        ) : (
          works.map((work) => {
            return <WorkContainer key={work.id} workData={work} />;
          })
        )}
      </DefaultScreen>
    </GlobalContainer>
  );
}
