import React from "react";

const FormComponent = () => {
  return (
    <div className="App-form">
      <form>
        <h1>form</h1>
        <h1>Name</h1>
        <input name="name" placeholder="Pizza HexOcean ... " required />
        <h1>Preparation time</h1>
        <input
          name="preparation_time"
          type="time"
          placeholder="01:30:22"
          step="3"
          required
        />
        <h1>Dish type</h1>
        <select name="type" as="select" required>
          <option selected disabled>
            Choose...
          </option>
          <option>pizza</option>
          <option>soup</option>
          <option>sandwich</option>
        </select>
        <p>_____________________</p>
        <h1>if Pizza</h1>
        <h1>number of slices</h1>
        <input name="no_of_slices" type="number" placeholder="1" required />

        <h1>diameter</h1>
        <input name="diameter" type="number" placeholder="1" required />

        <p>_____________________</p>
        <h1>if Soup</h1>
        <h1>spiciness scale</h1>
        <input name="spiciness_scale" type="number" placeholder="1" required />
        <p>_____________________</p>
        <h1>if Sandwich</h1>
        <h1>slices of bread</h1>
        <input name="slices_of_bread" type="number" placeholder="1" required />
        <p>_____________________</p>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
