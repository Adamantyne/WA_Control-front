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
      <ErrLabel />
      <InfoLabel message={"Data de entrega"} />
      <DateDiv>
        <Input
          type="text"
          placeholder="MM/DD/AAAA,hh:mm"
          maxLength={15}
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
      <InfoLabel message={"Finalizado"} />
      <ComboBox
        defaultValue={workData.delivered}
        onChange={(e) => {
          setWorkData({ ...workData, delivered: e.target.value });
        }}
      >
        <option value={false}>não</option>
        <option value={true}>sim</option>
      </ComboBox>
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
