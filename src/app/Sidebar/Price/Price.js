import Input from "@/app/components/Input";
import "./Price.css";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title pric-title">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={""} name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={199}
          title={"₹100-299"}
          name={"test2"}
        />
         <Input
          handleChange={handleChange}
          value={299}
          title={"₹299-399"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={399}
          title={"₹399-599"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={599}
          title={"₹599 - 1999"}
          name={"test2"}
        />
        <Input
          handleChange={handleChange}
          value={1999}
          title={"Over 1999"}
          name={"test2"}
        />
      </div>
    </div>
  );
}
export default Price;
