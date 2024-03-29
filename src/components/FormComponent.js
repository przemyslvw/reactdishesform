import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { switchType, addDish } from "../reducers/dishreducer/operations";
const FormComponent = () => {
  const dishtype = useSelector(state => state.dishReducer.currentType);
  const model = useSelector(state => state.dishReducer.currentModel);
  const dispatch = useDispatch();

  return (
    <div className="App-form">
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={model}
        onSubmit={(values, { resetForm }) => {
          addDish(values);
          alert("Dish " + values.name + " has been added.");
          dispatch(switchType(""));
          resetForm();
        }}
        validate={values => {
          let errors = {};
          if (!values.name) {
            errors.name = "name is required";
          } else if (values.name.length < 3) {
            errors.name = "name must have 3 characters";
          }
          if (
            !values.preparation_time ||
            values.preparation_time === "00:00:00"
          ) {
            errors.preparation_time = "preparation time is required";
          } else if (values.preparation_time.length <= 5) {
            values.preparation_time = values.preparation_time + ":00";
          }
          if (!values.type) {
            errors.type = "type is required";
          }
          if (values.type === "pizza") {
            if (!values.no_of_slices) {
              errors.no_of_slices = "number of slices is required";
            } else if (values.no_of_slices <= 0) {
              errors.no_of_slices = "number of slices must be higher than zero";
            } else if (!Number.isInteger(values.no_of_slices)) {
              errors.no_of_slices = "number of slices must be integer";
            }

            if (!values.diameter) {
              errors.diameter = "diameter is required";
            } else if (values.diameter <= 0) {
              errors.diameter = "diameter must be higher than zero";
            }
          }
          if (values.type === "soup") {
            if (!values.spiciness_scale) {
              errors.spiciness_scale = "spiciness scale is required";
            } else if (
              values.spiciness_scale <= 0 ||
              values.spiciness_scale > 10
            ) {
              errors.spiciness_scale = "the number must be between 1 and 10";
            } else if (!Number.isInteger(values.spiciness_scale)) {
              errors.spiciness_scale = "the number must be integer";
            }
          }
          if (values.type === "sandwich") {
            if (!values.slices_of_bread) {
              errors.slices_of_bread = "slices of bread are required";
            } else if (values.slices_of_bread <= 0) {
              errors.slices_of_bread =
                "slices of bread must be higher than zero";
            } else if (!Number.isInteger(values.slices_of_bread)) {
              errors.slices_of_bread = "slices of bread must be integer";
            }
          }
          return errors;
        }}
        render={({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <h1>Dish name</h1>
              {errors.name && <p>{errors.name}</p>}
              <input
                name="name"
                onChange={handleChange}
                placeholder="Pizza HexOcean ... "
                value={values.name}
                className={errors.name && "is-invalid"}
              />
            </label>
            <label>
              <h1>Preparation time</h1>
              {errors.preparation_time && <p>{errors.preparation_time}</p>}
              <input
                name="preparation_time"
                type="time"
                onChange={handleChange}
                value={values.preparation_time}
                placeholder="01:30:22"
                step="2"
                className={errors.preparation_time && "is-invalid"}
              />
            </label>
            <label>
              <h1>Dish type</h1>
              <select
                name="type"
                value={values.type}
                onChange={e => {
                  dispatch(switchType(e.target.value));
                  handleChange(e);
                }}
                className={errors.type && "is-invalid"}
              >
                <option disabled value="">
                  choose one ...
                </option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
              </select>
            </label>
            {dishtype === "pizza" && (
              <div>
                <label>
                  <h1>Number of slices</h1>
                  {errors.no_of_slices && <p>{errors.no_of_slices}</p>}
                  <input
                    name="no_of_slices"
                    type="number"
                    onChange={handleChange}
                    step="1"
                    className={errors.no_of_slices && "is-invalid"}
                  />
                </label>
                <label>
                  <h1>Diameter</h1>
                  {errors.diameter && <p>{errors.diameter}</p>}
                  <input
                    name="diameter"
                    type="number"
                    step="0.01"
                    onChange={handleChange}
                    className={errors.diameter && "is-invalid"}
                  />
                </label>
              </div>
            )}
            {dishtype === "soup" && (
              <label>
                <h1>Spiciness scale</h1>
                {errors.spiciness_scale && <p>{errors.spiciness_scale}</p>}
                <input
                  name="spiciness_scale"
                  type="number"
                  onChange={handleChange}
                  step="1"
                  className={errors.spiciness_scale && "is-invalid"}
                />
              </label>
            )}
            {dishtype === "sandwich" && (
              <label>
                <h1>Slices of bread</h1>
                {errors.slices_of_bread && <p>{errors.slices_of_bread}</p>}
                <input
                  name="slices_of_bread"
                  type="number"
                  onChange={handleChange}
                  step="1"
                  className={errors.slices_of_bread && "is-invalid"}
                />
              </label>
            )}
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
