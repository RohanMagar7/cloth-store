import Input from "@/app/components/Input";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input
              onChange={handleChange}
              type="radio"
              value={""}
              name="test"
            />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={"Dresses"}
            title={"Dresses"}
            name={"test"}
          />

          <Input
            handleChange={handleChange}
            value={"Topwear"}
            title={"Topwear"}
            name={"test"}
          />
          <Input
            handleChange={handleChange}
            value={"Jeans"}
            title={"Jeans"}
            name={"test"}
          />

       
        </div>
      </div>
    </>
  );
}
export default Category;
