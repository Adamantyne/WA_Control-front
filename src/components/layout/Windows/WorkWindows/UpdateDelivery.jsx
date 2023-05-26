import styled from "styled-components";
import { BsFillCalendarWeekFill } from "react-icons/bs";

import Input from "../../MicroElements/Input";
import InfoLabel from "../../MicroElements/InfoLabel";
import ErrLabel from "../../MicroElements/ErrLabel";
import ComboBox from "../../MicroElements/ComboBox";
import { getCalendarContext } from "../../../../hooks/calendarContext";
import { useNavigate } from "react-router-dom";
import TextArea from "../../MicroElements/TextArea";

export default function UpdateDelivery(props) {
  const { setWorkData, workData, errorMessage } = props;
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
      <InfoLabel message={"Orçamento"} />
      <TextArea
        type="text"
        placeholder="Inserir orçamento..."
        maxLength={5000}
        value={workData.budget ? workData.budget : ""}
        onChange={(e) => setWorkData({ ...workData, budget: e.target.value })}
      />
      <ErrLabel />
      <InfoLabel message={"Data de entrega"} />
      <DateDiv>
        <Input
          type="text"
          placeholder="MM/DD/AAAA,hh:mm"
          maxLength={16}
          value={workData.deliveryDate ? workData.deliveryDate : ""}
          onChange={(e) =>
            setWorkData({ ...workData, deliveryDate: e.target.value })
          }
        />
        <BsFillCalendarWeekFill
          onClick={() => {
            setSchedulingData({ type: "delivery", workId: workData.id });
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

      <InfoLabel message={"Observação"} />
      <TextArea
        type="text"
        maxLength={100}
        placeholder="Inserir observação do trabalho..."
        value={workData.observation ? workData.observation : ""}
        onChange={(e) =>
          setWorkData({ ...workData, observation: e.target.value })
        }
      />

      <ErrLabel />

      <FinalizationDiv>
        <div>
          <InfoLabel message={"Finalizado"} />
          <ComboBox
            defaultValue={workData.finished}
            onChange={(e) => {
              const value = e.target.value === "true" ? true : false;
              setWorkData({ ...workData, finished: value });
            }}
          >
            <option value={false}>não</option>
            <option value={true}>sim</option>
          </ComboBox>
        </div>
        <div>
          <InfoLabel message={"Pago"} />
          <ComboBox
            defaultValue={workData.payed}
            onChange={(e) => {
              const value = e.target.value === "true" ? true : false;
              setWorkData({ ...workData, payed: value });
            }}
          >
            <option value={false}>não</option>
            <option value={true}>sim</option>
          </ComboBox>
        </div>

        <div>
          <InfoLabel message={"Entregue"} />
          <ComboBox
            defaultValue={workData.delivered}
            onChange={(e) => {
              const value = e.target.value === "true" ? true : false;
              setWorkData({ ...workData, delivered: value });
            }}
          >
            <option value={false}>não</option>
            <option value={true}>sim</option>
          </ComboBox>
        </div>
      </FinalizationDiv>
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

const FinalizationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    max-width: var(--month-inputh-width);
  }
`;
