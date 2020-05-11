import React, { useState } from "react";


const AddRecipiePage = ({ingredients, measurements}) => {
  ingredients = ['egg', 'onion', 'garlic', 'water', 'pepper', 'salt'];
  let initialSteps = ["mix ingredients", "cook food", "eat"];
  initialSteps = initialSteps.map((step, i) => step = {'name': step, 'edit': false})
  
  let [steps, setSteps] = useState(initialSteps || []);

  const handleAddStep = () => {
    setSteps([...steps, 'Next Step']);
  }
  const handleDeleteStep = (i) => {
    let filteredSteps = [...steps];
    filteredSteps = filteredSteps.slice(0, i).concat(filteredSteps.slice(i + 1, filteredSteps.length));
    setSteps(filteredSteps);
  }

  const toggleEditMode = (i) => {
    let editSteps = [...steps];
    let step = editSteps[i];
    step.edit = !step.edit;
    setSteps(editSteps);
  }
  
  return (
    <main className="add-recipie-page bg-lg">
      <div className='add-recipie-header bg-tlg'>
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

          <div className='form-group'>
            <label for='summary'>Summary:</label>
            <textarea
              id='summary'
              className='form-control'
              type="text"
              placeholder="What type of dish is it? Where is it from?
                Which seasons is it best during? Why do you
                like it?"
            />
          </div>

          <label for='servings'>Servings:</label>
          <input id='servings' className='form-control' type="text" placeholder="Garlic Shrimp" />

          <label for='prep-time'>Prep Time:</label>
          <input id='prep-time' className='form-control' type="number" placeholder="20" />

          <label for='cook-time'>Cook Time:</label>
          <input id='cook-time' className='form-control' type="number" placeholder="20" />


        </section>
        <section className="ingredients">
          <div className='form-group'>
            <label for='ingredients'>Ingredients:</label>

            <div className='form-subgroup'>
              <select id='ingredients' className='form-control'>
                {ingredients.map((ingredient, i) => (
                  <option key={i} value='ingredient'>{ingredient}</option>
                ))}
              </select>
              <button type='button' className='btn btn-primary'>+ Add</button>
            </div>
          </div>
        </section>
        <section className="preperation-steps">
          <div className='form-group'>
            <div className='form-subgroup'>
              <label for='steps'>Preparation Steps:</label>
              <button onClick={() => handleAddStep()} type='button' className='btn btn-primary'>+ Add</button>
            </div>
            <div>
              <ol className='step-list'>
                {steps.map((step, i) => (
                  <li key={i} className={(step.edit ? 'edit' : 'done') + ' step-item'}>
                    <div className='step-name'>
                      <span>{step.name}</span>
                    </div>
                    <div className='step-buttons'>
                      <button onClick={() => handleDeleteStep(i)} type='button' className='btn btn-sm btn-danger delete-btn'>[] Delete</button>
                      <button onClick={() => toggleEditMode(i)} type='button' className='btn btn-sm btn-success done-btn'>$ Done</button>
                      <button onClick={() => toggleEditMode(i)} type='button' className='btn btn-sm btn-warning edit-btn'>/ Edit</button>
                    </div>
                    {step.edit ? 
                      <div className='step-text'>
                        <textarea id={'step-text-' + i} />
                      </div>
                      : null
                    }
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <button type='button' className='btn btn-success btn-block'>Add Recipie</button>
      </form>
    </main>
  );
};

export default AddRecipiePage;
