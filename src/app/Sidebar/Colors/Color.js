import Input from "@/app/components/Input";
import "./Color.css";

function Color({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={""} name="test1" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="Blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="Red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="Pink"
        title="Pink"
        name="test1"
        color="pink"
      />
    </div>
  );
}
export default Color;
