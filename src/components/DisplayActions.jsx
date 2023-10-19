import { imagePaths } from "../utils/constants";
import Sleep from "./Sleep";
import Coding from "./Coding";
import Coffee from "./Coffee";
import Dead from "./Dead";
import Apply from "./Apply";
import Progress from "./Progress";

export default function DisplayActions({ state, actionProps }) {
  const imagePath = imagePaths[state.image];

  return (
    <>
      <div className="card buttons">
        <Sleep {...actionProps} />
        <Coding {...actionProps} />
        <Coffee {...actionProps} />
        <Apply {...actionProps} />
      </div>
      <div className="progress">
        <Progress {...actionProps} />
      </div>
      <Dead {...actionProps} />
      {imagePath && (
        <div className="image">
          <img src={imagePath} alt="Pet Programmer" />
        </div>
      )}
    </>
  );
}
