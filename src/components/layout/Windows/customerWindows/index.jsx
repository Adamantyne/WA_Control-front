import { useState, useEffect } from "react";

import { getContext } from "../../../../hooks/UserContext";
import { getWindowContext } from "../../../../hooks/windowContext";
import {
  getRequisition,
  postRequisition,
  deleteRequisition,
} from "../../../../utils/api";
import FormCustomerWindow from "./FormCustomerWindow";
import updateObj from "../../../../utils/updateObj";

export default function CustomerWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow } = getWindowContext();
  const [customerData, setCustomerData] = useState({});
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id && contextData.config) {
      getCustomerData();
    } else {
      setCustomerData({ name: "" });
    }
  }, [id]);

  async function getCustomerData() {
    try {
      const response = await getRequisition(`customers/${id}`, contextData);
      response.phoneNumber1 = response.phoneNumbers[0].phoneNumber1;
      response.phoneNumber2 = response.phoneNumbers[0].phoneNumber2;
      response.phoneNumber3 = response.phoneNumbers[0].phoneNumber3;
      delete response.phoneNumbers;
      setCustomerData(response);
      setCurrentCustomer(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function submitCustomerData(e) {
    e.preventDefault();
    try {
      if (id) {
        const formatedData = updateObj(currentCustomer, customerData);
        await postRequisition(`customers/${id}`, contextData, formatedData);
      } else {
        await postRequisition(`customers`, contextData, customerData);
      }
      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }

  async function deleteCustomer() {
    try {
      if (id) {
        await deleteRequisition(`customers/${id}`, contextData);
        closeWindow();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FormCustomerWindow
      submitCustomerData={submitCustomerData}
      customerData={customerData}
      setCustomerData={setCustomerData}
      errorMessage={errorMessage}
      closeWindow={closeWindow}
      deleteCustomer={deleteCustomer}
      id={id}
    />
  );
}
