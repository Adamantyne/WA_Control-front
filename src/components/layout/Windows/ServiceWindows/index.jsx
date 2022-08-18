import { useState, useEffect } from "react";

import { getContext } from "../../../../hooks/UserContext";
import { getWindowContext } from "../../../../hooks/windowContext";
import {
  getRequisition,
  postRequisition,
  deleteRequisition,
} from "../../../../utils/api";
import ServiceWindowForm from "./ServiceWindowForm";
import updateObj from "../../../../utils/updateObj";

export default function ServiceWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow, deleteAtributes } = getWindowContext();
  const [serviceData, setServiceData] = useState({});
  const [currentService, setCurrentService] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id && contextData.config) {
      getData();
    } else {
      setServiceData({ name: "" });
    }
  }, [id]);

  async function getData() {
    try {
      const response = await getRequisition(`services/${id}`, contextData);
      setServiceData(response);
      setCurrentService(response);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      if (id) {
        const formatedData = updateObj(currentService, serviceData);
        await postRequisition(`services/${id}`, contextData, formatedData);
      } else {
        await postRequisition(`services`, contextData, serviceData);
      }
      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }

  async function deleteService() {
    try {
      if (id) {
        await deleteRequisition(`services/${id}`, contextData);
        closeWindow();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ServiceWindowForm
      submitData={submitData}
      serviceData={serviceData}
      setServiceData={setServiceData}
      errorMessage={errorMessage}
      closeWindow={closeWindow}
      id={id}
      deleteService={deleteService}
    />
  );
}
