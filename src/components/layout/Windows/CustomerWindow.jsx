import { useState, useEffect } from "react";

import {Form} from "../Form";
import Input from "../Input";
import { getContext } from "../../../hooks/UserContext";
import { getRequisition, postRequisition } from "../../../utils/api";
import Button from "../Button";

export default function CustomerWindow(props) {
  const { id } = props;
  const { windowState, setWindowState, contextData } = getContext();
  const [customerData, setCustomerData] = useState({ name: "" });
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    try {
      const response = await getRequisition(`customers/${id}`, contextData);
      const formateData = deleteCustomerAtributes(response);
      setCustomerData(formateData);
    } catch (error) {
      console.log(error);
    }
  }
  async function submitData(e) {
    e.preventDefault();
    try {
      if (id) {
        const formateData = deleteCustomerAtributes(customerData);
        await postRequisition(`customers/${id}`, contextData, formateData);
      } else {
        await postRequisition(`customers`, contextData, customerData);
      }
      closeWindow();
    } catch (error) {
      console.log(error);
    }
  }
  function closeWindow() {
    setWindowState({
      ...windowState,
      isOpen: false,
      type: undefined,
      id: undefined,
    });
  }
  function deleteCustomerAtributes(customerData) {
    delete customerData.phoneNumbers;
    delete customerData.userId;
    delete customerData.id;
    if (!customerData.establishment) delete customerData.establishment;
    if (!customerData.address) delete customerData.address;
    if (!customerData.phoneNumber1) delete customerData.phoneNumber1;
    if (!customerData.phoneNumber2) delete customerData.phoneNumber2;
    if (!customerData.phoneNumber3) delete customerData.phoneNumber3;
    return customerData;
  }

  return (
    <>
      <Form onSubmit={submitData}>
        <Input
          type="text"
          placeholder="nome"
          required
          value={customerData.name ? customerData.name : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, name: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="estabelecimento"
          value={customerData.establishment ? customerData.establishment : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, establishment: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="endereço"
          value={customerData.address ? customerData.address : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, address: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="telefone 1"
          min={9}
          value={customerData.phoneNumber1 ? customerData.phoneNumber1 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber1: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="telefone 2"
          min={9}
          value={customerData.phoneNumber2 ? customerData.phoneNumber2 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber2: e.target.value })
          }
        />
        <Input
          type="text"
          placeholder="telefone 3"
          min={9}
          value={customerData.phoneNumber3 ? customerData.phoneNumber3 : ""}
          onChange={(e) =>
            setCustomerData({ ...customerData, phoneNumber3: e.target.value })
          }
        />
        <Button
          onClick={() => {
            closeWindow();
          }}
        >
          cancelar
        </Button>
        <Button type="submit">{id ? "atualizar" : "criar"}</Button>
      </Form>
    </>
  );
}
