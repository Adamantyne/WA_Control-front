import { useState, useEffect } from "react";
import styled from "styled-components";

import { Form } from "../../MacroElements/Form";
import { getContext } from "../../../../hooks/UserContext";
import { getWindowContext } from "../../../../hooks/windowContext";
import { getRequisition, postRequisition } from "../../../../utils/api";
import CustonButon from "../../MicroElements/CustomButton";
import UpdateBudget from "./UpdateBudget";
import UpdateDelivery from "./UpdateDelivery";
import updateObj from "../../../../utils/updateObj";

export default function WorkWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow } = getWindowContext();
  const [workData, setWorkData] = useState({});
  const [currentWork, setCurrentWork] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [customerNumbers, setCustomerNumbers] = useState({});

  useEffect(() => {
    if (id && contextData.config) {
      getWorkData();
    } else {
      setWorkData({ id: "" });
    }
  }, [id]);
  async function getWorkData() {
    try {
      const response = await getRequisition(`works/${id}`, contextData);
      setWorkData(response);
      getcustomerNumbers(response.customerId);
      setCurrentWork(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function getcustomerNumbers(id) {
    try {
      const response = await getRequisition(`customers/${id}`, contextData);
      setCustomerNumbers(response.phoneNumbers[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      const requestData = updateObj(currentWork, workData);
      await postRequisition(`works/${id}`, contextData, requestData);

      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }
  return (
    <WorkForm onSubmit={submitData}>
      {currentWork.budget ? (
        <UpdateDelivery
          setWorkData={setWorkData}
          workData={workData}
          errorMessage={errorMessage}
        />
      ) : currentWork.id ? (
        <UpdateBudget
          workData={workData}
          setWorkData={setWorkData}
          errorMessage={errorMessage}
          customerNumbers={customerNumbers}
        />
      ) : (
        <></>
      )}
      <CustonButon
        type="submit"
        backgroundColor={"var(--color-main-2)"}
        width={"100%"}
        hoverBackgroundColor={"var(--color-main)"}
        margin={"25px 0 10px 0"}
      >
        {typeof workData.id === "string" ? "criar" : "atualizar"}
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
    </WorkForm>
  );
}

const WorkForm = styled(Form)`
  align-items: flex-start;
`;
