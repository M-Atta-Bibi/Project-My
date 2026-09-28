import Checkbox from "../../../Componets/common/inputs/checkbox-component/checkbox";
import { ContainerCard, ContainerQ } from "./style";

const QuestionCard = ({
  qData,
  answer,
  value,
  onChangeFunction,
  isFinshed,
}) => {
  return (
    <ContainerCard>
      <h3>
        Q{qData.id}.{qData.question}
      </h3>
      {qData?.options?.map((item, index) => {
        let statusClass = "";
        if (isFinshed) {
          if (item === answer) {
            statusClass = "correct";
          }
          if (value === item && value !== answer) {
            statusClass = "wrong";
          }
        }
        return (
          <ContainerQ key={index} className={statusClass}>
            <Checkbox
              key={item}
              type="radio"
              fieldLabel={item}
              fieldValue={value === item}
              name={`${qData.id}`}
              fieldV={item}
              onChangeFunction={() => onChangeFunction(qData.id, item)}
            />
          </ContainerQ>
        );
      })}
    </ContainerCard>
  );
};
export default QuestionCard;
