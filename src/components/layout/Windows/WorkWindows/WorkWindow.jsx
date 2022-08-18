import { useState, useEffect } from "react";
import styled from "styled-components";

import { Form } from "../../MacroElements/Form";
import { getContext } from "../../../../hooks/UserContext";
import { getWindowContext } from "../../../../hooks/windowContext";
import { getRequisition, postRequisition } from "../../../../utils/api";
import CustonButon from "../../MicroElements/CustomButton";
import UpdateBudget from "./UpdateBudget";
import UpdateDelivery from "./UpdateDelivery";

export default function WorkWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow } = getWindowContext();
  const [workData, setWorkData] = useState({
    id: "",
    customerId: 0,
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [customerNumbers, setCustomerNumbers] = useState({});
  const [currentState, setCurrentState] = useState({budget:null});

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
      setCurrentState(response);
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
      const requestData = {};
      if (workData.budget) {
        requestData.budget = workData.budget;
      }
      if (workData.budgetDate) {
        requestData.budgetDate = workData.budgetDate;
      }
      if (workData.deliveryDate) {
        requestData.deliveryDate = workData.deliveryDate;
      }
      if (workData.description) {
        requestData.description = workData.description;
      }
      if (workData.delivered) {
        requestData.delivered = workData.delivered;
      }
      await postRequisition(`works/${id}`, contextData, requestData);

      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }
  return (
    <WorkForm onSubmit={submitData}>
      {currentState.budget ? (
        <UpdateDelivery
          setWorkData={setWorkData}
          workData={workData}
          errorMessage={errorMessage}
        />
      ) : (
        <UpdateBudget
          workData={workData}
          setWorkData={setWorkData}
          errorMessage={errorMessage}
          customerNumbers={customerNumbers}
        />
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

function ComboBoxCustomers(props) {
  const { name, id } = props;
  return <option value={id}>{name}</option>;
}

const WorkForm = styled(Form)`
  align-items: flex-start;
`;
