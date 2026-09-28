import { InputTypes } from "../../../constants/enums";
import Checkbox from "./checkbox-component/checkbox";

import InputComponent from "./input-component/InputComponent";

const InputProvider = ({ itemObject, ...flatProps }) => {
  const field = itemObject ?? flatProps;
  const type = field?.type;
  if (type === InputTypes.CHECKBOX || type === InputTypes.RADIO) {
    return <Checkbox itemObject={field} />;
  }
  if (
    type === InputTypes.TEXT ||
    type === InputTypes.EMAIL ||
    type === InputTypes.PASSWORD ||
    type === InputTypes.NUMBER ||
    type === InputTypes.TEL
  ) {
    return <InputComponent itemObject={field} />;
  }
  return null;
};
export default InputProvider;
