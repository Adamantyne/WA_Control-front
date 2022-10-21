import { Form } from "../../MacroElements/Form";
import Input from "../../MicroElements/Input";

import Button from "../../MicroElements/Button";
import InfoLabel from "../../MicroElements/InfoLabel";
import ErrLabel from "../../MicroElements/ErrLabel";
import CustonButon from "../../MicroElements/CustomButton";

export default function ServiceWindowForm(props) {
  const {
    submitData,
    serviceData,
    setServiceData,
    errorMessage,
    closeWindow,
    id,
    deleteService,
  } = props;
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
            const formatedValue = e.target.value.replace("R$", "").replace(",",".");
            setServiceData({
              ...serviceData,
              value: parseInt(formatedValue * 100),
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
            backgroundColor={"var(--color-main-2)"}
            width={"48%"}
            hoverBackgroundColor={"var(--color-main)"}
            margin={"10px 0 10px 0"}
          >
            cancelar
          </CustonButon>
          <CustonButon
            onClick={() => {
              deleteService();
            }}
            backgroundColor={"var(--color-error)"}
            width={"48%"}
            hoverBackgroundColor={"var(--color-error-2)"}
            margin={"10px 0 10px 0"}
          >
            deletar
          </CustonButon>
        </div>
      </Form>
    </>
  );
}
