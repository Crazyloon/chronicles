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
        <div className="form-subgroup">
          <label htmlFor="ingredients">Ingredients:</label>
          <button
            type="button"
            tabIndex="6"
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
                {ingredient.edit ? (
                  <div>
                    <div className="input-group">
                      <label htmlFor={"ingredient-name-" + i}>Name: </label>
                      <input
                        id={"ingredient-name-" + i}
                        tabIndex="7"
                        value={ingredient.name}
                        type="text"
                        onChange={(event) =>
                          handleIngredientNameChange(event, i)
                        }
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor={"amount-" + i}>Amount: </label>
                      <input
                        id={"amount-" + i}
                        tabIndex="8"
                        value={ingredient.amount}
                        type="number"
                        step="0.5"
                        onChange={(event) => handleAmountChange(event, i)}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor={"measurement-" + i}>Measurement: </label>
                      <input
                        type="text"
                        id={"measurement-" + i}
                        tabIndex="9"
                        value={ingredient.measurement}
                        className="measurement-options"
                        onChange={(event) => handleMeasurementChange(event, i)}
                      />
                    </div>
                  </div>
                ) : (
                  <span className={!("edit" in ingredient) ? "text-muted" : ""}>
                    {ingredient.name} ({ingredient.amount}{" "}
                    {ingredient.measurement})
                  </span>
                )}
                <div className="step-buttons">
                  <button
                    tabIndex="30"
                    onClick={() => handleDeleteIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-danger delete-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    tabIndex="10"
                    onClick={() => toggleEditIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-success done-btn"
                  >
                    <FontAwesomeIcon icon={faCheck} /> Done
                  </button>
                  <button
                    tabIndex="20"
                    onClick={() => toggleEditIngredient(i)}
                    type="button"
                    className="btn btn-sm btn-warning edit-btn"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
