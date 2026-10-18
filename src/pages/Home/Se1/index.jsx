import { useNavigate } from "react-router-dom";
import Button from "../../../Componets/common/Button";
import { Co1, Main } from "./style";
import { FaShoppingCart } from "react-icons/fa";
import pathConstants from "../../../routes/pathConstants";

const Se1 = () => {
  const navigation = useNavigate();

  return (
    <Co1>
      <Main>
        <div className="SeLeft">
          <span className="badge">Welcome to DKUST</span>
          <h1>
            Powering the Future with <span>Smart Technology</span>
          </h1>
          <p>
            We build AI-driven software, robotics systems, and intelligent
            hardware solutions that help businesses automate, scale, and
            innovate faster than ever before.
          </p>
          <div className="CoBu">
            <Button
              onClickFunction={() => navigation(pathConstants.Products)}
              label="Explore Products"
              className="BuEP"
              icon={<FaShoppingCart />}
            />
            <Button
              onClickFunction={() => navigation(pathConstants.Quiz)}
              label="Take the Quiz"
              className="BuTTQ"
            />
          </div>
        </div>

        <div className="SeRight">
          <div className="Co4">
            <h3>12K+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="Co4">
            <h3>12K+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="Co4">
            <h3>12K+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="Co4">
            <h3>12K+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </Main>
    </Co1>
  );
};
export default Se1;
