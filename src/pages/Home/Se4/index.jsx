import Button from "../../../Componets/common/Button";
import { Co1, Main } from "./style";

const Se4 = () => {
  return (
    <Co1>
      <Main>
        <h2>Ready to get started?</h2>
        <p>
          Join thousands of teams using DKUST solutions to build, automate, and
          scale their operations.
        </p>
        <div className="CoBu">
          <Button label="Create Free Account" className="BuCFA" />
          <Button label="Sign In" className="BuSi" />
        </div>
      </Main>
    </Co1>
  );
};
export default Se4;
