import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faSave,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const AddRecipiePage = ({ ingredients, measurements }) => {
  ingredients = ["egg", "onion", "garlic", "water", "pepper", "salt"];
  let initialSteps = [
    "mix ingredients until fully mixed in the bowl and make sure they're totally mixed like all the way mixed - no joke",
    "cook food",
    "eat",
  ];
  initialSteps = initialSteps.map(
    (step, i) => (step = { text: step, edit: false })
  );

  let [steps, setSteps] = useState(initialSteps || []);

  const handleAddStep = () => {
    setSteps([...steps, "Next Step"]);
  };
  const handleDeleteStep = (i) => {
    let filteredSteps = [...steps];
    filteredSteps = filteredSteps
      .slice(0, i)
      .concat(filteredSteps.slice(i + 1, filteredSteps.length));
    setSteps(filteredSteps);
  };

  const toggleEditMode = (i) => {
    let editSteps = [...steps];
    let step = editSteps[i];
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
            <label for="name">Name:</label>
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Garlic Shrimp"
            />
          </div>

          <div className="form-group">
            <label for="summary">Summary:</label>
            <textarea
              id="summary"
              className="form-control"
              type="text"
              placeholder="What type of dish is it? Where is it from?
                Which seasons is it best during? Why do you
                like it?"
            />
          </div>

          <label for="servings">Servings:</label>
          <input
            id="servings"
            className="form-control"
            type="text"
            placeholder="4 cups"
          />

          <label for="prep-time">Prep Time (minutes):</label>
          <input
            id="prep-time"
            className="form-control"
            type="number"
            placeholder="20 minutes"
          />

          <label for="cook-time">Cook Time (minutes):</label>
          <input
            id="cook-time"
            className="form-control"
            type="number"
            placeholder="20 minutes"
          />
        </section>
        <section className="ingredients">
          <div className="form-group">
            <label for="ingredients">Ingredients:</label>

            <div className="form-subgroup">
              <select id="ingredients" className="form-control">
                {ingredients.map((ingredient, i) => (
                  <option key={i} value="ingredient">
                    {ingredient}
                  </option>
                ))}
              </select>
              <button type="button" className="btn btn-primary">
                <FontAwesomeIcon icon={faPlus} /> Add
              </button>
            </div>
          </div>
        </section>
        <section className="preperation-steps">
          <div className="form-group">
            <div className="form-subgroup">
              <label for="steps">Preparation Steps:</label>
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
                      <span>{step.text}</span>
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
                        onClick={() => toggleEditMode(i)}
                        type="button"
                        className="btn btn-sm btn-success done-btn"
                      >
                        <FontAwesomeIcon icon={faCheck} /> Done
                      </button>
                      <button
                        onClick={() => toggleEditMode(i)}
                        type="button"
                        className="btn btn-sm btn-warning edit-btn"
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    </div>
                    {step.edit ? (
                      <>
                        <div className="break"></div>
                        <div className="step-text">
                          <textarea
                            onChange={(event) => handleStepTextChange(event, i)}
                            placeholder='First, mix the ingredients.'
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
          <FontAwesomeIcon icon={faSave} /> Saveg Recipie
        </button>
      </form>
    </main>
  );
};

export default AddRecipiePage;
