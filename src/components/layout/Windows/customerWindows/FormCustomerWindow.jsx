import { Form } from "../../MacroElements/Form";
import Input from "../../MicroElements/Input";

import Button from "../../MicroElements/Button";
import InfoLabel from "../../MicroElements/InfoLabel";
import ErrLabel from "../../MicroElements/ErrLabel";
import CustonButon from "../../MicroElements/CustomButton";

export default function FormCustomerWindow(props) {
  const {
    submitCustomerData,
    customerData,
    setCustomerData,
    errorMessage,
    closeWindow,
    deleteCustomer,
    id,
  } = props;

  return (
    <>
      <Form onSubmit={submitCustomerData}>
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
            backgroundColor={"var(--color-main-2)"}
            width={"48%"}
            hoverBackgroundColor={"var(--color-main)"}
            margin={"10px 0 10px 0"}
          >
            cancelar
          </CustonButon>
          <CustonButon
            onClick={() => {
              deleteCustomer();
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
