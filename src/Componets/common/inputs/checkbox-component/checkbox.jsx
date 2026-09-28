import { Form } from "react-bootstrap";
import { CheckStyles } from "./style";

const Checkbox = ({ itemObject, ...flatProps }) => {
  const {
    type,
    id,
    name,
    fieldLabel,
    fieldValue,
    onChangeFunction,
    onBlurFunction,
    errorMessage,
    fieldV,
  } = itemObject ?? flatProps;

  return (
    <>
      <CheckStyles>
        <Form.Check
          type={type}
          id={id || name}
          name={name}
          label={fieldLabel}
          value={fieldV}
          checked={Boolean(fieldValue)}
          onChange={(event) => onChangeFunction?.(event.target.checked)}
          onBlur={() => onBlurFunction?.()}
        />
        {errorMessage ? <p className="Text-error">{errorMessage}</p> : null}
      </CheckStyles>
    </>
  );
};
export default Checkbox;
