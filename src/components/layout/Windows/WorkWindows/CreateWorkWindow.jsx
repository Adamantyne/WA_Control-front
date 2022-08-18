import { useState, useEffect } from "react";
import styled from "styled-components";

import { Form } from "../../MacroElements/Form";
import { getContext } from "../../../../hooks/UserContext";
import { getWindowContext } from "../../../../hooks/windowContext";
import { getRequisition, postRequisition } from "../../../../utils/api";
import ComboBox from "../../MicroElements/ComboBox";
import InfoLabel from "../../MicroElements/InfoLabel";
import ErrLabel from "../../MicroElements/ErrLabel";
import CustonButon from "../../MicroElements/CustomButton";
import TextArea from "../../MicroElements/TextArea";

export default function CreateWorkWindow(props) {
  const { id } = props;
  const [workData, setWorkData] = useState({ description: "", customerId: 0 });
  const [errorMessage, setErrorMessage] = useState("");
  const [customers, setCustomers] = useState();
  const { contextData } = getContext();
  const { closeWindow, deleteAtributes } = getWindowContext();

  useEffect(() => {
    if (contextData.config) {
      getCustomers();
    }
  }, [contextData]);

  async function getCustomers() {
    try {
      const response = await getRequisition(`customers`, contextData);
      setCustomers(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      await postRequisition(`works`, contextData, workData);
      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }

  return (
    <>
      <CreateWorkForm onSubmit={submitData}>
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
        <InfoLabel message={"Cliente"} />
        <ComboBox
          name="Cliente"
          defaultValue={0}
          onChange={(e) => {
            setWorkData({ ...workData, customerId: parseInt(e.target.value) });
          }}
        >
          <option value={0}>Selecionar cliente</option>;
          {customers?.map((customer) => {
            const { name, id } = customer;
            return <ComboBoxCustomers key={name + id} name={name} id={id} />;
          })}
        </ComboBox>
        <ErrLabel
          message={
            errorMessage.includes("customer")
              ? "Selecione um cliente válido"
              : ""
          }
          color={
            errorMessage.includes("customer")
              ? "var(--color-error)"
              : "var(--color-transparent)"
          }
        />

        <CustonButon
          type="submit"
          backgroundColor={"var(--color-main-2)"}
          width={"100%"}
          hoverBackgroundColor={"var(--color-main)"}
          margin={"25px 0 10px 0"}
        >
          criar
        </CustonButon>

        <CustonButon
          onClick={() => {
            closeWindow();
          }}
          backgroundColor={"var(--color-main-2)"}
          width={"100%"}
          hoverBackgroundColor={"var(--color-main)"}
          margin={"10px 0 0 0"}
        >
          cancelar
        </CustonButon>
      </CreateWorkForm>
    </>
  );
}

function ComboBoxCustomers(props) {
  const { name, id } = props;
  return <option value={id}>{name}</option>;
}

const CreateWorkForm = styled(Form)`
  align-items: flex-start;
`;
