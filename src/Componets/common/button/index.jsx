const Button = (Props) => {
  return (
    <button
      id={Props.id}
      onClick={Props.onClickFunction}
      type={Props.type}
      className={Props.className}
    >
      {Props.icon} {Props.label}
    </button>
  );
};
export default Button;
