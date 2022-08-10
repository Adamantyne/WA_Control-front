import { useState, useEffect } from "react";

import { Form } from "../Form";
import Input from "../Input";
import { getContext } from "../../../hooks/UserContext";
import { getWindowContext } from "../../../hooks/windowContext";
import { getRequisition, postRequisition } from "../../../utils/api";
import Button from "../Button";
import InfoLabel from "../InfoLabel";
import ErrLabel from "../ErrLabel";
import CustonButon from "../CustomButton";

export default function CustomerWindow(props) {
  const { id } = props;
  const { contextData } = getContext();
  const { closeWindow, deleteAtributes } = getWindowContext();
  const [customerData, setCustomerData] = useState({ name: "" });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (id) {
      getData();
    } else {
      setCustomerData({ name: "" });
    }
  }, [id]);

  async function getData() {
    try {
      const response = await getRequisition(`customers/${id}`, contextData);
      const formateData = deleteAtributes(response);
      setCustomerData(formateData);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      if (id) {
        const formateData = deleteAtributes(customerData);
        await postRequisition(`customers/${id}`, contextData, formateData);
      } else {
        await postRequisition(`customers`, contextData, customerData);
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
        <InfoLabel message={"Nome"} />
        <Input
          type="text"
          maxLength={34}
          placeholder="Inserir nome..."
          required
          value={customerData.name ? customerData.name : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, name: e.target.value })
          }
        />
        <ErrLabel
          message={
            errorMessage.includes("customer") ? "Nome já cadastrado" : ""
          }
          color={
            errorMessage.includes("customer")
              ? "var(--color-error)"
              : "var(--color-transparent)"
          }
        />

        <InfoLabel message={"Estabelecimento"} />
        <Input
          type="text"
          placeholder="Inserir estabelecimento..."
          maxLength={34}
          value={customerData.establishment ? customerData.establishment : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, establishment: e.target.value })
          }
        />
        <ErrLabel />

        <InfoLabel message={"Endereço"} />
        <Input
          type="text"
          placeholder="Inserir endereço..."
          maxLength={50}
          value={customerData.address ? customerData.address : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, address: e.target.value })
          }
        />
        <ErrLabel />

        <InfoLabel message={"Telefone principal"} />
        <Input
          type="text"
          maxLength={14}
          placeholder="Inserir telefone principal..."
          minLength={9}
          value={customerData.phoneNumber1 ? customerData.phoneNumber1 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber1: e.target.value })
          }
        />
        <ErrLabel />

        <InfoLabel message={"Telefone 2"} />
        <Input
          type="text"
          maxLength={14}
          placeholder="Inserir telefone 2..."
          minLength={9}
          value={customerData.phoneNumber2 ? customerData.phoneNumber2 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber2: e.target.value })
          }
        />
        <ErrLabel />

        <InfoLabel message={"Telefone 3"} />
        <Input
          type="text"
          maxLength={14}
          placeholder="Inserir telefone 3..."
          minLength={9}
          value={customerData.phoneNumber3 ? customerData.phoneNumber3 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber3: e.target.value })
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
