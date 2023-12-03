function Buttton({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
}
export default Buttton;
