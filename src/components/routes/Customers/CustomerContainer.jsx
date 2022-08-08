import ElementContainer from "../../layout/ElementContainer";
import { getContext } from "../../../hooks/UserContext";

export default function CustomerContainer(props) {
  const { customerData } = props;
  const { windowState, setWindowState } = getContext();
  const { name, establishment, id } = customerData;
  return (
    <ElementContainer
      onClick={() => {
        setWindowState({ ...windowState, isOpen: true, id, type: "customer" });
      }}
    >
      <h2>{name}</h2>
      <p>{establishment}</p>
    </ElementContainer>
  );
}
