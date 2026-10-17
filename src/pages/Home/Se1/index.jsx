import Button from "../../../Componets/common/Button";
import { Co1, Main } from "./style";
const Se1 = () => {
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
            <Button label="Explore Products" className="BuEP" />
            <Button label="Take the Quiz" className="BuTTQ" />
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
