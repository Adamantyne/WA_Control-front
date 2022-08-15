import { BsFillGearFill } from "react-icons/bs";

import {
  ElementContainer,
  ElementInformations,
} from "../../layout/MacroElements/ElementContainer";

export default function HomeContainer(props) {
  const { workData } = props;
  const { customer, budgetDate, deliveryDate, budget } = workData;
  return (
    <ElementContainer>
      <BsFillGearFill />
      <ElementInformations>
        <h2>{customer.name}</h2>
        <p>
          {budget
            ? `data de entrega: ${deliveryDate}`
            : `data de orçamento: ${budgetDate}`}
        </p>
      </ElementInformations>
    </ElementContainer>
  );
}
