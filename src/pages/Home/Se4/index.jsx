import Button from "../../../Componets/common/button";
import { Co1, Main } from "./style";
import pathConstants from "../../../routes/pathConstants";
import { useNavigate } from "react-router-dom";

const Se4 = () => {
  const navigation = useNavigate();

  return (
    <Co1>
      <Main>
        <h2>Ready to get started?</h2>
        <p>
          Join thousands of teams using DKUST solutions to build, automate, and
          scale their operations.
        </p>
        <div className="CoBu">
          <Button
            label="Create Free Account"
            className="BuCFA"
            onClickFunction={() => navigation(pathConstants.Register)}
          />
          <Button
            label="Sign In"
            className="BuSi"
            onClickFunction={() => navigation(pathConstants.Login)}
          />
        </div>
      </Main>
    </Co1>
  );
};
export default Se4;
