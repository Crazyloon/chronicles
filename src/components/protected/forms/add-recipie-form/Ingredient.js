import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Ingredients = ({
  ingredients,
  ingredientOptions,
  measurementOptions,
  handleAddIngredient,
  handleDeleteIngredient,
  handleIngredientNameChange,
  handleMeasurementChange,
  handleAmountChange,
  toggleEditIngredient,
}) => {
  return (
    <section className="ingredients">
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients:</label>

        <div className="form-subgroup">
          <select id="ingredients" className="form-control">
            {ingredientOptions.map((ingredient, i) => (
              <option key={i} value="ingredient">
                {ingredient}
              </option>
            ))}
          </select>
          <button
            type="button"
            tabIndex='6'
            onClick={() => {
              handleAddIngredient();
            }}
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
        </div>
        <div>
          <ol className="step-list">
            {ingredients.map((ingredient, i) => (
              <li
                key={i}
                className={(ingredient.edit ? "edit" : "done") + " step-item"}
              >
                <div className="step-name">
                  {ingredient.edit ? (
                    <div>
                      <label htmlFor={"ingredient-name-" + i}>Name: </label>
                      <input
                        id={'ingredient-name-' + i}
                        tabIndex='7'
                        value={ingredient.name}
                        type="text"
                        onChange={(event) =>
                          handleIngredientNameChange(event, i)
                        }
                      />
                    </div>
                  ) : (
                    <span
                      className={!("edit" in ingredient) ? "text-muted" : ""}
                    >
                      {ingredient.name} ({ingredient.amount} {ingredient.measurement})
                    </span>
                  )}
                </div>
                <div className="step-buttons">
                  <button
                    tabIndex='-1'
                    onClick={() => handleDeleteIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-danger delete-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    tabIndex='10'
                    onClick={() => toggleEditIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-success done-btn"
                  >
                    <FontAwesomeIcon icon={faCheck} /> Done
                  </button>
                  <button
                    tabIndex='-1'
                    onClick={() => toggleEditIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-warning edit-btn"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
                {ingredient.edit ? (
                  <>
                    <div className="break"></div>
                    <div className="ingredient-inputs">
                      <div className="input-group">
                        <label htmlFor={"amount-" + i}>Amount: </label>
                        <input
                          id={"amount-" + i}
                          tabIndex='8'
                          value={ingredient.amount}
                          type="number"
                          step='0.5'
                          onChange={(event) => handleAmountChange(event, i)}
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor={"measurement-" + i}>
                          Measurement:{" "}
                        </label>
                        <select
                          id={"measurement-" + i}
                          tabIndex='9'
                          value={ingredient.measurement} 
                          className="measurement-options"
                          onChange={(event) =>
                            handleMeasurementChange(event, i)
                          }
                        >
                          {measurementOptions.map((measurement, i) => (
                            <option key={i} value={measurement}>{measurement}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
