import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { switchType } from "../reducers/dishreducer/operations";
const FormComponent = () => {
  const dishtype = useSelector(state => state.dishReducer.type);
  const model = useSelector(state => state.dishReducer.currentModel);
  const dispatch = useDispatch();

  return (
    <div className="App-form">
      <Formik
        initialValues={model}
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
              step="1"
              required
            />
            <h1>Dish type</h1>
            <select
              name="type"
              value={values.type}
              onChange={e => {
                dispatch(switchType(e.target.value));
                handleChange(e);
              }}
              required
            >
              <option selected disabled value="">
                choose one ...
              </option>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="sandwich">sandwich</option>
            </select>
            {dishtype === "pizza" ? (
              <div>
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
                  step="0.01"
                  onChange={handleChange}
                  placeholder="1"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
            {dishtype === "soup" ? (
              <div>
                <h1>spiciness scale</h1>
                <input
                  name="spiciness_scale"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  min="1"
                  max="10"
                  required
                />
              </div>
            ) : (
              <div></div>
            )}
            {dishtype === "sandwich" ? (
              <div>
                <h1>slices of bread</h1>
                <input
                  name="slices_of_bread"
                  type="number"
                  onChange={handleChange}
                  placeholder="1"
                  required
                />
              </div>
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
