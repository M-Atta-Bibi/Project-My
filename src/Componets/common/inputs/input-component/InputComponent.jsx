import { Form } from "react-bootstrap";
import { InputStyles } from "./style";
import { useState } from "react";
import Button from "../../Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputComponent = ({ itemObject, ...flatProps }) => {
  const {
    type,
    name,
    onChangeFunction,
    onBlurFunction,
    fieldValue,
    fieldLabel,
    placeholder,
    errorMessage,
  } = itemObject ?? flatProps;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputStyles>
      <Form.Group className="form-group" controlId={name}>
        <Form.Label>{fieldLabel}</Form.Label>
        <Form.Control
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={fieldValue ?? ""}
          name={name}
          onChange={(event) => onChangeFunction?.(event.target.value)}
          onBlur={() => onBlurFunction?.()}
          isInvalid={Boolean(errorMessage)}
        />
        {type === "password" && (
          <Button
            type="button"
            onClickFunction={() => setShowPassword(!showPassword)}
            label={showPassword ? <FaEyeSlash /> : <FaEye />}
          />
        )}
        {errorMessage ? <p>{errorMessage}</p> : null}
      </Form.Group>
    </InputStyles>
  );
};
export default InputComponent;
