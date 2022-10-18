import { useState, useEffect } from "react";

import DefaultScreen from "../../layout/DefaultScreen";
import { getRequisition } from "../../../utils/api";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import HomeContainer from "./HomeContainer";
import Loader from "../../layout/MicroElements/Loader";
import dayjs from "dayjs";
import { Form } from "../../layout/MacroElements/Form";
import Input from "../../layout/MicroElements/Input";
import Button from "../../layout/MicroElements/Button";
import styled from "styled-components";
import GlobalContainer from "../../layout/MacroElements/GlobalContainer";
import { setItem } from "../../../utils/localStorage";

export default function Home() {
  const [works, setWorks] = useState("Carregando");
  const { contextData, setContext } = getContext();
  const { windowState } = getWindowContext();
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    if (contextData.config) {
      getWorks();
    }
  }, [contextData, windowState.isOpen]);

  async function getWorks() {
    try {
      const response = await getRequisition("works", contextData);
      const todayWorks = findTodayWorks(response);
      if (todayWorks.length === 0) {
        setWorks("Não há trabalhos para hoje!");
      } else {
        setWorks(todayWorks);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function findTodayWorks(works) {
    return works.filter((work) => {
      const budgetDate = work.budgetDate?.slice(0, 10);
      const deliveryDate = work.deliveryDate?.slice(0, 10);
      const todayDate = dayjs().format("MM/DD/YYYY");
      if (
        (budgetDate === todayDate && !work.budget) ||
        (deliveryDate === todayDate && work.delivered === false)
      ) {
        return true;
      }
      return false;
    });
  }

  function SetBackground(e) {
    e.preventDefault();
    setItem("backgroundImage", urlImage);
    setContext({ ...contextData, backgroundImage: urlImage });
  }
  return (
    <GlobalContainer>
      <DefaultScreen>
        <h1>Cronograma de hoje:</h1>
        {typeof works === "string" ? (
          works === "Carregando" ? (
            <Loader />
          ) : (
            <h2>{works}</h2>
          )
        ) : (
          works.map((work) => {
            return (
              <HomeContainer key={work.id} workData={work}></HomeContainer>
            );
          })
        )}
      </DefaultScreen>
      <SetImageContainer>
        <Form onSubmit={SetBackground}>
          <Input
            type={"url"}
            value={urlImage}
            onChange={(e) => {
              setUrlImage(e.target.value);
            }}
          />
          <HomeButton type="submit">Aplicar imagem de fundo</HomeButton>
        </Form>
      </SetImageContainer>
    </GlobalContainer>
  );
}

const HomeButton = styled(Button)`
  margin: 10px 0 10px 0;
`;
const SetImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 100%;
  padding-right: 50px;
`;

