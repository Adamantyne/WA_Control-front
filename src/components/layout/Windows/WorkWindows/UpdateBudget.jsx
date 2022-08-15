import { BsFillCalendarWeekFill } from "react-icons/bs";
import styled from "styled-components";

import Input from "../../MicroElements/Input";
import InfoLabel from "../../MicroElements/InfoLabel";
import ErrLabel from "../../MicroElements/ErrLabel";
import CustonButon from "../../MicroElements/CustomButton";
import TextArea from "../../MicroElements/TextArea";
import ComboBox from "../../MicroElements/ComboBox";
import { useState } from "react";
import { getCalendarContext } from "../../../../hooks/calendarContext";
import { useNavigate } from "react-router-dom";

export default function UpdateBudget(props) {
  const { workData, setWorkData, errorMessage, customerNumbers } = props;
  const { phoneNumber1, phoneNumber2, phoneNumber3 } = customerNumbers;
  const [selectedNumber, setSelectedNumber] = useState(0);
  const { setSchedulingData } = getCalendarContext();
  const navigate = useNavigate();
  return (
    <>
      <InfoLabel message={"Descrição"} />
      <TextArea
        type="text"
        maxLength={100}
        placeholder="Inserir descrição do trabalho..."
        required
        value={workData.description}
        onChange={(e) =>
          setWorkData({ ...workData, description: e.target.value })
        }
      />
      <ErrLabel />
      <InfoLabel message={"Data de orçamento"} />
      <DateDiv>
        <Input
          type="text"
          placeholder="MM/DD/AAAA,hh:mm"
          maxLength={15}
          value={workData.budgetDate ? workData.budgetDate : ""}
          onChange={(e) =>
            setWorkData({ ...workData, budgetDate: e.target.value })
          }
        />
        <BsFillCalendarWeekFill
          onClick={() => {
            setSchedulingData({ type: "budget", workId: workData.id });
            navigate("/calendar");
          }}
        />
      </DateDiv>
      <ErrLabel
        message={errorMessage.includes("date") ? "Data inválida" : ""}
        color={
          errorMessage.includes("date")
            ? "var(--color-error)"
            : "var(--color-transparent)"
        }
      />
      <InfoLabel message={"Orçamento"} />
      <BudgetDiv>
        <TextArea
          type="text"
          placeholder="Inserir orçamento..."
          maxLength={100}
          value={workData.budget ? workData.budget : ""}
          onChange={(e) => setWorkData({ ...workData, budget: e.target.value })}
        />
        <div>
          <ComboBox
            defaultValue={0}
            onChange={(e) => {
              setSelectedNumber(e.target.value);
            }}
          >
            <option value={0}>selecionar número</option>
            <option value={phoneNumber1}>
              {phoneNumber1 ? phoneNumber1 : "sem número (1)"}
            </option>
            <option value={phoneNumber2}>
              {phoneNumber2 ? phoneNumber2 : "sem número (2)"}
            </option>
            <option value={phoneNumber3}>
              {phoneNumber3 ? phoneNumber3 : "sem número (3)"}
            </option>
          </ComboBox>
          <CustonButon
            type="submit"
            backgroundColor={"var(--color-main2)"}
            width={"60px%"}
            hoverBackgroundColor={"var(--color-main)"}
            margin={"none"}
            onClick={() => {
              const message = workData.budget;
              const number = selectedNumber;
              let encoded = encodeURIComponent(message);
              window.open(`https://wa.me/+55${number}?text=${encoded}`);
            }}
          >
            enviar orçamento
          </CustonButon>
        </div>
      </BudgetDiv>
      <ErrLabel />
    </>
  );
}

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: var(--font-size-6);
    color: var(--color-main);
    margin-left: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;

const BudgetDiv = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
`;
