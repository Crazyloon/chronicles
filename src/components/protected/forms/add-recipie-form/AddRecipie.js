import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PreparationSteps from "./PreparationSteps";
import Ingredients from "./Ingredient";
import PrimaryInfo from "./PrimaryInfo";

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
  let [recipie, setRecipie] = useState({});

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

  const handleNameChange = (event) => {
    let data = event.target.value;
    setRecipie({...recipie, name: data})
  }
  const handleSummaryChange = (event) => {
    let data = event.target.value;
    setRecipie({...recipie, summary: data})
  }
  const handleServingsChange = (event) => {
    let data = event.target.value;
    setRecipie({...recipie, servings: data})
  }
  const handlePrepTimeChange = (event) => {
    let data = event.target.value;
    setRecipie({...recipie, prepTime: data})
  }
  const handleCookTimeChange = (event) => {
    let data = event.target.value;
    setRecipie({...recipie, cookTime: data})
  }

  const handleIngredientNameChange = (event, i) => {
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients.splice(i, 1)[0];
    let data = event.target.value;
    ingredient.name = data;
    setIngredients([...updatedIngredients, ingredient]);
  }
  const handleMeasurementChange = (event, i) => {
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients.splice(i, 1)[0];
    let data = event.target.value;
    ingredient.measurement = data;
    setIngredients([...updatedIngredients, ingredient]);
  }
  const handleAmountChange = (event, i) => {
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients.splice(i, 1)[0];
    let data = event.target.value;
    ingredient.amount = data;
    setIngredients([...updatedIngredients, ingredient]);
  }

  const handleSaveRecipie = () => {
    console.log(`recipie saved: ${recipie}`);
  }

  return (
    <main className="add-recipie-page bg-lg">
      <div className="add-recipie-header">
        <h3>Add Recipie</h3>
      </div>
      <form className="form add-recipie-body bg-w">
        <PrimaryInfo 
          handleNameChange={handleNameChange}
          handleSummaryChange={handleSummaryChange}
          handleServingsChange={handleServingsChange}
          handlePrepTimeChange={handlePrepTimeChange}
          handleCookTimeChange={handleCookTimeChange}
        />

        <Ingredients
          ingredients={ingredients}
          ingredientOptions={ingredientOptions}
          measurementOptions={measurementOptions}
          handleAddIngredient={handleAddIngredient}
          handleDeleteIngredient={handleDeleteIngredient}
          toggleEditIngredient={toggleEditIngredient}
          handleIngredientNameChange={handleIngredientNameChange}
          handleAmountChange={handleAmountChange}
          handleMeasurementChange={handleMeasurementChange}
        />

        <PreparationSteps
          steps={steps}
          handleAddStep={handleAddStep}
          handleDeleteStep={handleDeleteStep}
          handleStepTextChange={handleStepTextChange}
          toggleEditStep={toggleEditStep}
        />

        <button type="button" className="btn btn-success btn-block">
          <FontAwesomeIcon onClick={() => handleSaveRecipie()} icon={faSave} /> Save Recipie
        </button>
      </form>
    </main>
  );
};

export default AddRecipiePage;
