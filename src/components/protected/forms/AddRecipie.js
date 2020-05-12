import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faSave,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const AddRecipiePage = () => {
  let ingredientOptions = [
    "egg",
    "onion",
    "shrimp",
    "water",
    "tomatoe",
    "salt",
    "pepper",
  ];
  let measurementOptions = [
    "kg",
    "cup",
    "tbsp",
    "tsp",
    "oz",
    "l",
    "ml",
    "pound",
  ];
  let initialIngredients = [
    {
      name: "shrimp",
      amount: 2,
      measurement: "cups",
    },
    {
      name: "onion",
      amount: 0.5,
      measurement: "medium",
    },
    {
      name: "garlic",
      amount: 6,
      measurement: "cloves",
    },
  ].map((ingredient, i) => (ingredient = { ...ingredient, edit: false }));
  let initialSteps = [
    "mix ingredients until fully mixed in the bowl and make sure they're totally mixed like all the way mixed - no joke",
    "cook food",
    "eat",
  ].map((step, i) => (step = { text: step, edit: false }));

  let [steps, setSteps] = useState(initialSteps || []);
  let [ingredients, setIngredients] = useState(initialIngredients || []);

  const handleAddStep = () => {
    setSteps([...steps, { text: "Next Step" }]);
  };
  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: "Next Ingredient", amount: 1, measurement: 1, edit: true },
    ]);
  };
  const handleDeleteStep = (i) => {
    let filteredSteps = [...steps];
    filteredSteps = filteredSteps
      .slice(0, i)
      .concat(filteredSteps.slice(i + 1, filteredSteps.length));
    setSteps(filteredSteps);
  };

  const handleDeleteIngredient = (i) => {
    let filteredIngredients = [...ingredients];
    filteredIngredients = filteredIngredients
      .slice(0, i)
      .concat(filteredIngredients.slice(i + 1, filteredIngredients.length));
    setIngredients(filteredIngredients);
  };

  const toggleEditIngredient = (i) => {
    let editIngredients = [...ingredients];
    let ingredient = editIngredients[i];
    if (!("edit" in ingredient)) ingredient.name = "";
    ingredient.edit = !ingredient.edit;
    setIngredients(editIngredients);
  };

  const toggleEditStep = (i) => {
    let editSteps = [...steps];
    let step = editSteps[i];
    if (!("edit" in step)) step.text = "";
    step.edit = !step.edit;
    setSteps(editSteps);
  };

  const handleStepTextChange = (event, i) => {
    let text = event.target.value;
    let stepsList = [...steps];
    let step = stepsList[i];
    step.text = text;
    setSteps(stepsList);
  };

  return (
    <main className="add-recipie-page bg-lg">
      <div className="add-recipie-header">
        <h3>Add Recipie</h3>
      </div>
      <form className="form add-recipie-body bg-w">
        <section className="main-info-section">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Garlic Shrimp"
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              className="form-control"
              type="text"
              placeholder="What type of dish is it? Where is it from?
                Which seasons is it best during? Why do you
                like it?"
            />
          </div>

          <label htmlFor="servings">Servings:</label>
          <input
            id="servings"
            className="form-control"
            type="text"
            placeholder="4 cups"
          />

          <label htmlFor="prep-time">Prep Time (minutes):</label>
          <input
            id="prep-time"
            className="form-control"
            type="number"
            placeholder="20 minutes"
          />

          <label htmlFor="cook-time">Cook Time (minutes):</label>
          <input
            id="cook-time"
            className="form-control"
            type="number"
            placeholder="20 minutes"
          />
        </section>
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
                    className={
                      (ingredient.edit ? "edit" : "done") + " step-item"
                    }
                  >
                    <div className="step-name">
                      <span
                        className={!("edit" in ingredient) ? "text-muted" : ""}
                      >
                        {ingredient.name}
                      </span>
                    </div>
                    <div className="step-buttons">
                      <button
                        onClick={() => handleDeleteIngredient(i)}
                        type="button"
                        className="btn btn-sm btn-danger delete-btn"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        onClick={() => toggleEditIngredient(i)}
                        type="button"
                        className="btn btn-sm btn-success done-btn"
                      >
                        <FontAwesomeIcon icon={faCheck} /> Done
                      </button>
                      <button
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
                            <label htmlFor={"amount-" + i}>Amount:</label>
                            <input id={"amount-" + i} type="number" />
                          </div>
                          <div className="input-group">
                            <label htmlFor={"measurement-" + i}>
                              Measurement:
                            </label>
                            <select
                              id={"measurement-" + i}
                              className="measurement-options"
                            >
                              {measurementOptions.map((measurement) => (
                                <option>{measurement}</option>
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
        <section className="preperation-steps">
          <div className="form-group">
            <div className="form-subgroup">
              <label htmlFor="steps">Preparation Steps:</label>
              <button
                onClick={() => handleAddStep()}
                type="button"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faPlus} /> Add
              </button>
            </div>
            <div>
              <ol className="step-list">
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className={(step.edit ? "edit" : "done") + " step-item"}
                  >
                    <div className="step-name">
                      <span className={!("edit" in step) ? "text-muted" : ""}>
                        {step.text}
                      </span>
                    </div>
                    <div className="step-buttons">
                      <button
                        onClick={() => handleDeleteStep(i)}
                        type="button"
                        className="btn btn-sm btn-danger delete-btn"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        onClick={() => toggleEditStep(i)}
                        type="button"
                        className="btn btn-sm btn-success done-btn"
                      >
                        <FontAwesomeIcon icon={faCheck} /> Done
                      </button>
                      <button
                        onClick={() => toggleEditStep(i)}
                        type="button"
                        className="btn btn-sm btn-warning edit-btn"
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    </div>
                    {step.edit ? (
                      <>
                        <div className="break"></div>
                        <div className="step-input">
                          <textarea
                            onChange={(event) => handleStepTextChange(event, i)}
                            placeholder="First, mix the ingredients."
                            value={step.text}
                            id={"step-text-" + i}
                          />
                        </div>
                      </>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <button type="button" className="btn btn-success btn-block">
          <FontAwesomeIcon icon={faSave} /> Save Recipie
        </button>
      </form>
    </main>
  );
};

export default AddRecipiePage;
