import React from "react";

const AddRecipiePage = ({ingredients, measurements}) => {
  ingredients = ['egg', 'onion', 'garlic', 'water', 'pepper', 'salt'];
  return (
    <main className="add-recipie-page bg-w">
      <div className='add-recipie-header bg-tlg'>
        <h3>Add Recipie</h3>
      </div>
      <form className="form add-recipie-body">
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
                {ingredients.map(ingredient => (
                  <option value='ingredient'>{ingredient}</option>
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
              <button type='button' className='btn btn-primary'>+ Add</button>
            </div>
              
          </div>
        </section>
      </form>
    </main>
  );
};

export default AddRecipiePage;
