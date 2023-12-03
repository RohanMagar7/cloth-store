import Buttton from "../components/Buttton";
import "./Recommended.css";

function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttton
            onClickHandler={handleClick}
            value={""}
            title={"All Product"}
          />
          <Buttton
            onClickHandler={handleClick}
            value={"ZWERLON"}
            title={"ZWERLON"}
          />
          <Buttton
            onClickHandler={handleClick}
            value={"Roadster"}
            title={"Roadster"}
          />
          <Buttton
            onClickHandler={handleClick}
            value={"Aahwan"}
            title={"Aahwan"}
          />
          <Buttton
            onClickHandler={handleClick}
            value={"LEVI'S"}
            title={"LEVI'S"}
          />
        </div>
      </div>
    </>
  );
}
export default Recommended;
