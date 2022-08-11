import { useState, useEffect } from "react";

import { Form } from "../MacroElements/Form";
import Input from "../MicroElements/Input";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import { getRequisition, postRequisition } from "../../../utils/api";
import Button from "../MicroElements/Button";
import InfoLabel from "../MicroElements/InfoLabel";
import ErrLabel from "../MicroElements/ErrLabel";
import CustonButon from "../MicroElements/CustomButton";

export default function ServiceWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow, deleteAtributes } = getWindowContext();
  const [serviceData, setServiceData] = useState({ name: "" });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id) {
      getData();
    } else {
      setServiceData({ name: "" });
    }
  }, [id]);

  async function getData() {
    try {
      const response = await getRequisition(`services/${id}`, contextData);
      const formateData = deleteAtributes(response);
      setServiceData(formateData);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      if (id) {
        const formateData = deleteAtributes(serviceData);
        await postRequisition(`services/${id}`, contextData, {
          ...formateData,
          value: formateData.value,
        });
      } else {
        await postRequisition(`services`, contextData, serviceData);
      }
      closeWindow();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.toString());
    }
  }

  return (
    <>
      <Form onSubmit={submitData}>
        <InfoLabel message={"Serviço"} />
        <Input
          type="text"
          maxLength={34}
          placeholder="Inserir nome do serviço..."
          required
          value={serviceData.name ? serviceData.name : ""}
          onChange={(e) =>
            setServiceData({ ...serviceData, name: e.target.value })
          }
        />
        <ErrLabel
          message={
            errorMessage.includes("service") ? "Serviço já cadastrado" : ""
          }
          color={
            errorMessage.includes("service")
              ? "var(--color-error)"
              : "var(--color-transparent)"
          }
        />
        <InfoLabel message={"Valor"} />
        <Input
          type="text"
          placeholder="Inserir valor..."
          required
          value={serviceData.value ? `R$ ${serviceData.value / 100}` : "R$"}
          onChange={(e) => {
            const formatedValue = e.target.value
              .replace("R$", "")
              .replace(",", "")
              .replace(".", "");
            setServiceData({
              ...serviceData,
              value: parseInt(formatedValue),
            });
          }}
        />
        <ErrLabel />

        <InfoLabel message={"Descrição"} />
        <Input
          type="text"
          placeholder="Inserir descrição..."
          maxLength={50}
          value={serviceData.description ? serviceData.description : ""}
          onChange={(e) =>
            setServiceData({ ...serviceData, description: e.target.value })
          }
        />
        <ErrLabel />

        <Button type="submit">{id ? "atualizar" : "criar"}</Button>
        <div>
          <CustonButon
            onClick={() => {
              closeWindow();
            }}
            backgroundColor={"var(--color-main2)"}
            width={"48%"}
            hoverBackgroundColor={"var(--color-main)"}
            margin={"10px 0 10px 0"}
          >
            cancelar
          </CustonButon>
          <CustonButon
            onClick={() => {
              closeWindow();
            }}
            backgroundColor={"var(--color-error)"}
            width={"48%"}
            hoverBackgroundColor={"var(--color-error2)"}
            margin={"10px 0 10px 0"}
          >
            deletar
          </CustonButon>
        </div>
      </Form>
    </>
  );
}
