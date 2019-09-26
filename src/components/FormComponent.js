import React from "react";
import { Formik } from "formik";
const FormComponent = () => {
  return (
    <div className="App-form">
      <Formik
        initialValues={{
          name: "",
          preparation_time: "",
          type: "",
          no_of_slices: "",
          diameter: "",
          spiciness_scale: "",
          slices_of_bread: ""
        }}
        onSubmit={values => {
          console.log(values);
        }}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <h1>Add dish</h1>
            <h1>Name</h1>
            <input
              name="name"
              onChange={handleChange}
              placeholder="Pizza HexOcean ... "
              value={values.name}
              required
            />
            <h1>Preparation time</h1>
            <input
              name="preparation_time"
              type="time"
              onChange={handleChange}
              placeholder="01:30:22"
              step="3"
              required
            />
            <h1>Dish type</h1>
            <select
              name="type"
              onChange={handleChange}
              value={values.type}
              required
            >
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="sandwich">sandwich</option>
            </select>
            <p>_____________________</p>
            <h1>if Pizza</h1>
            <h1>number of slices</h1>
            <input
              name="no_of_slices"
              type="number"
              onChange={handleChange}
              placeholder="1"
              required
            />

            <h1>diameter</h1>
            <input
              name="diameter"
              type="number"
              onChange={handleChange}
              placeholder="1"
              required
            />

            <p>_____________________</p>
            <h1>if Soup</h1>
            <h1>spiciness scale</h1>
            <input
              name="spiciness_scale"
              type="number"
              onChange={handleChange}
              placeholder="1"
              required
            />
            <p>_____________________</p>
            <h1>if Sandwich</h1>
            <h1>slices of bread</h1>
            <input
              name="slices_of_bread"
              type="number"
              onChange={handleChange}
              placeholder="1"
              required
            />
            <p>_____________________</p>
            <button className="btn btn-primary" type="submit">
              Add dish
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default FormComponent;
