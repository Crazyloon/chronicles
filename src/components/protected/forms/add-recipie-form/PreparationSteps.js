import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const PreparationSteps = ({
  steps,
  handleAddStep,
  handleDeleteStep,
  handleStepTextChange,
  toggleEditStep
}) => {
  return (
    <section className="preperation-steps">
      <div className="form-group">
        <div className="form-subgroup">
          <label htmlFor="steps">Preparation Steps:</label>
          <button
          tabIndex='11'
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
              {step.edit ? (
                    <div className="step-input">
                      <textarea
                        onChange={(event) => handleStepTextChange(event, i)}
                        tabIndex='12'
                        placeholder="First, mix the ingredients."
                        value={step.text}
                        id={"step-text-" + i}
                      />
                    </div>
                ) : <div className="step-name">
                  <span className={!("edit" in step) ? "text-muted" : ""}>
                    {step.text}
                  </span>
                </div>}
                <div className="step-buttons">
                  <button
                    onClick={() => handleDeleteStep(i)}
                    tabIndex='-1'
                    type="button"
                    className="btn btn-sm btn-danger delete-btn"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    onClick={() => toggleEditStep(i)}
                    tabIndex='13'
                    type="button"
                    className="btn btn-sm btn-success done-btn"
                  >
                    <FontAwesomeIcon icon={faCheck} /> Done
                  </button>
                  <button
                    onClick={() => toggleEditStep(i)}
                    tabIndex='-1'
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

export default PreparationSteps;
