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
        initialValues={model}
        onSubmit={values => {
          addDish(values);
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
            values.preparation_time === "00:00:00" ||
            values.preparation_time.length === 5
          ) {
            errors.preparation_time = "preparation time is required";
          }

          if (!values.type) {
            errors.type = "types is required";
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
              values.spiciness_scale > 10 ||
              !Number.isInteger(values.spiciness_scale)
            ) {
              errors.spiciness_scale = "the number must be between 1 and 10";
            }
          }
          if (values.type === "sandwich") {
            if (!values.slices_of_bread) {
              errors.slices_of_bread = "slices of bread is required";
            } else if (values.slices_of_bread <= 0) {
              errors.slices_of_bread =
                "slices of bread must be higher than zero";
            } else if (!Number.isInteger(values.slices_of_bread)) {
              errors.slices_of_bread = "slices of bread must be integer";
            }
          }
          return errors;
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
            <label>
              <h1>Name</h1>
              <p>{errors.name}</p>
              <input
                name="name"
                onChange={handleChange}
                placeholder="Pizza HexOcean ... "
                value={values.name}
              />
            </label>
            <label>
              <h1>Preparation time</h1>
              <p>{errors.preparation_time}</p>
              <input
                name="preparation_time"
                type="time"
                onChange={handleChange}
                placeholder="01:30:22"
                step="1"
              />
            </label>
            <label>
              <h1>Dish type</h1>
              <p>{errors.type}</p>
              <select
                name="type"
                value={values.type}
                onChange={e => {
                  dispatch(switchType(e.target.value));
                  handleChange(e);
                }}
              >
                <option selected disabled value="">
                  choose one ...
                </option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
              </select>
            </label>

            {dishtype === "pizza" ? (
              <div>
                <label>
                  <h1>number of slices</h1>
                  <p>{errors.no_of_slices}</p>
                  <input
                    name="no_of_slices"
                    type="number"
                    onChange={handleChange}
                    placeholder="1"
                    step="1"
                  />
                </label>
                <label>
                  <h1>diameter</h1>
                  <p>{errors.diameter}</p>
                  <input
                    name="diameter"
                    type="number"
                    step="0.01"
                    onChange={handleChange}
                    placeholder="1"
                  />
                </label>
              </div>
            ) : (
              <div></div>
            )}
            {dishtype === "soup" ? (
              <label>
                <h1>spiciness scale</h1>
                <p>{errors.spiciness_scale}</p>
                <input
                  name="spiciness_scale"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  step="1"
                />
              </label>
            ) : (
              <div></div>
            )}
            {dishtype === "sandwich" ? (
              <label>
                <h1>slices of bread</h1>
                <p>{errors.slices_of_bread}</p>
                <input
                  name="slices_of_bread"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  step="1"
                />
              </label>
            ) : (
              <div></div>
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
