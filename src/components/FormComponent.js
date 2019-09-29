import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { switchType, addDish } from "../reducers/dishreducer/operations";
const FormComponent = () => {
  const dishtype = useSelector(state => state.dishReducer.currentType);
  const model = useSelector(state => state.dishReducer.currentModel);
  const dispatch = useDispatch();

  return (
    <div className="App-form">
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={model}
        onSubmit={(values, { resetForm }) => {
          addDish(values);
          alert("Dish " + values.name + "has been added");
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
              values.spiciness_scale > 10
            ) {
              errors.spiciness_scale = "the number must be between 1 and 10";
            } else if (!Number.isInteger(values.spiciness_scale)) {
              errors.spiciness_scale = "the number must be integer";
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
        render={({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form>
            <label>
              <h1>Dish Name</h1>
              {errors.name && touched.name && <p>{errors.name}</p>}
              <Field
                name="name"
                onChange={handleChange}
                placeholder="Pizza HexOcean ... "
                value={values.name}
                className={errors.name && touched.name && "is-invalid"}
              />
            </label>
            <label>
              <h1>Preparation time</h1>
              {errors.preparation_time && touched.preparation_time && (
                <p>{errors.preparation_time}</p>
              )}
              <Field
                name="preparation_time"
                type="time"
                onChange={handleChange}
                value={values.preparation_time}
                placeholder="01:30:22"
                step="2"
                pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
                className={
                  errors.preparation_time &&
                  touched.preparation_time &&
                  "is-invalid"
                }
              />
            </label>
            <label>
              <h1>Dish type</h1>
              <Field
                component="select"
                name="type"
                value={values.type}
                onChange={e => {
                  dispatch(switchType(e.target.value));
                  handleChange(e);
                }}
              >
                <option disabled value="">
                  choose one ...
                </option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="sandwich">sandwich</option>
              </Field>
            </label>
            {dishtype === "pizza" && (
              <div>
                <label>
                  <h1>number of slices</h1>
                  {errors.no_of_slices && touched.no_of_slices && (
                    <p>{errors.no_of_slices}</p>
                  )}
                  <Field
                    name="no_of_slices"
                    type="number"
                    onChange={handleChange}
                    placeholder="1"
                    step="1"
                    className={
                      errors.no_of_slices &&
                      touched.no_of_slices &&
                      "is-invalid"
                    }
                  />
                </label>
                <label>
                  <h1>diameter</h1>
                  {errors.diameter && touched.diameter && (
                    <p>{errors.diameter}</p>
                  )}
                  <Field
                    name="diameter"
                    type="number"
                    step="0.01"
                    onChange={handleChange}
                    placeholder="1"
                    className={
                      errors.diameter && touched.diameter && "is-invalid"
                    }
                  />
                </label>
              </div>
            )}
            {dishtype === "soup" ? (
              <label>
                <h1>spiciness scale</h1>
                {errors.spiciness_scale && touched.spiciness_scale && (
                  <p>{errors.spiciness_scale}</p>
                )}
                <Field
                  name="spiciness_scale"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  step="1"
                  className={
                    errors.spiciness_scale &&
                    touched.spiciness_scale &&
                    "is-invalid"
                  }
                />
              </label>
            ) : (
              <div></div>
            )}
            {dishtype === "sandwich" ? (
              <label>
                <h1>slices of bread</h1>
                {errors.slices_of_bread && touched.slices_of_bread && (
                  <p>{errors.slices_of_bread}</p>
                )}
                <Field
                  name="slices_of_bread"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  step="1"
                  className={
                    errors.slices_of_bread &&
                    touched.slices_of_bread &&
                    "is-invalid"
                  }
                />
              </label>
            ) : (
              <div></div>
            )}
            <button className="btn btn-primary" type="submit">
              Add dish
            </button>
          </Form>
        )}
      />
    </div>
  );
};

export default FormComponent;
