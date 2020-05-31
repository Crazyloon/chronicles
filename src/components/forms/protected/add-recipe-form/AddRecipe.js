import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PreparationSteps from "../../form-parts/add-recipe-form/PreparationSteps";
import Ingredients from "../../form-parts/add-recipe-form/Ingredient";
import PrimaryInfo from "../../form-parts/add-recipe-form/PrimaryInfo";
import ImageUpload from "../../form-parts/img-upload/ImageUpload";
import { Toast } from "react-bootstrap";
import axios from "axios";

const AddrecipePage = ({ initialSteps, initialIngredients }) => {
  let [recipe, setrecipe] = useState({ ingredients: [], steps: [] });
  let [previewImages, setPreviewImages] = useState([]);
  let [showToast, setShowToast] = useState(false);
  let [formData, setFormData] = useState();

  let maxImages = 6;
  let maxImgWarning = `A maximum of ${maxImages} images are allowed at once`;

  const handleAddStep = () => {
    setrecipe({
      ...recipe,
      steps: [...recipe.steps, { text: "", edit: true }],
    });
  };
  const handleAddIngredient = () => {
    setrecipe({
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        { name: "", amount: 1, measurement: "", edit: true },
      ],
    });
  };
  const handleDeleteStep = (i) => {
    let filteredSteps = [...recipe.steps];
    filteredSteps = filteredSteps
      .slice(0, i)
      .concat(filteredSteps.slice(i + 1, filteredSteps.length));
    setrecipe({ ...recipe, steps: filteredSteps });
  };

  const handleDeleteIngredient = (i) => {
    let filteredIngredients = [...recipe.ingredients];
    filteredIngredients = filteredIngredients
      .slice(0, i)
      .concat(filteredIngredients.slice(i + 1, filteredIngredients.length));
    setrecipe({ ...recipe, ingredients: filteredIngredients });
  };

  const toggleEditIngredient = (i) => {
    let editIngredients = [...recipe.ingredients];
    let ingredient = editIngredients[i];
    if (!("edit" in ingredient)) ingredient.name = "";
    ingredient.edit = !ingredient.edit;
    setrecipe({ ...recipe, ingredients: editIngredients });
  };

  const toggleEditStep = (i) => {
    let editSteps = [...recipe.steps];
    let step = editSteps[i];
    if (!("edit" in step)) step.text = "";
    step.edit = !step.edit;
    setrecipe({ ...recipe, steps: editSteps });
  };

  const handleStepTextChange = (event, i) => {
    let text = event.target.value;
    let stepsList = [...recipe.steps];
    let step = stepsList[i];
    step.text = text;
    setrecipe({ ...recipe, steps: stepsList });
  };

  const handleNameChange = (event) => {
    let data = event.target.value;
    setrecipe({ ...recipe, name: data });
  };
  const handleSummaryChange = (event) => {
    let data = event.target.value;
    setrecipe({ ...recipe, summary: data });
  };
  const handleServingsChange = (event) => {
    let data = event.target.value;
    setrecipe({ ...recipe, servings: data });
  };
  const handlePrepTimeChange = (event) => {
    let data = event.target.value;
    setrecipe({ ...recipe, prepTime: data });
  };
  const handleCookTimeChange = (event) => {
    let data = event.target.value;
    setrecipe({ ...recipe, cookTime: data });
  };

  const handleIngredientNameChange = (event, i) => {
    let updatedIngredients = [...recipe.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.name = data;
    setrecipe({ ...recipe, ingredients: [...updatedIngredients] });
  };

  const handleMeasurementChange = (event, i) => {
    let updatedIngredients = [...recipe.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.measurement = data;
    setrecipe({ ...recipe, ingredients: [...updatedIngredients] });
  };
  
  const handleAmountChange = (event, i) => {
    let updatedIngredients = [...recipe.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.amount = data;
    setrecipe({ ...recipe, ingredients: [...updatedIngredients] });
  };

  const handleOnImagesChange = (event) => {
    let files = event.target.files;
    // setup for upload
    let imgData = new FormData();
    imgData.append('images', files);

    // Warn of too many images
    if (files.length > maxImages) {
      setShowToast(true);
      return;
    }

    // Setup images for preview
    let keys = Object.keys(files);
    let imgs = [];
    keys.forEach((key, i) => {
      let url = URL.createObjectURL(files[i]);
      imgs.push({ src: url });
    });
    setPreviewImages(imgs);
    setFormData(imgData);
  };

  const handleSaverecipe = () => {
    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("recipe", JSON.stringify(recipe));
    formData.append("event", 'UPLOAD_recipe');
    setFormData(formData);
    axios
      .post("/api/recipe", formData, config)
      .then((resp) => console.log("RESPOSNE", resp));
  };

  return (
    <main className="add-recipe-page bg-lg">
      <div className="add-recipe-header">
        <h3>Add recipe</h3>
      </div>
      <form className="form add-recipe-body bg-w" encType="mulipart/form-data">
        <PrimaryInfo
          handleNameChange={handleNameChange}
          handleSummaryChange={handleSummaryChange}
          handleServingsChange={handleServingsChange}
          handlePrepTimeChange={handlePrepTimeChange}
          handleCookTimeChange={handleCookTimeChange}
        />

        <Ingredients
          ingredients={recipe.ingredients}
          handleAddIngredient={handleAddIngredient}
          handleDeleteIngredient={handleDeleteIngredient}
          toggleEditIngredient={toggleEditIngredient}
          handleIngredientNameChange={handleIngredientNameChange}
          handleAmountChange={handleAmountChange}
          handleMeasurementChange={handleMeasurementChange}
        />

        <PreparationSteps
          steps={recipe.steps}
          handleAddStep={handleAddStep}
          handleDeleteStep={handleDeleteStep}
          handleStepTextChange={handleStepTextChange}
          toggleEditStep={toggleEditStep}
        />

        <ImageUpload
          images={previewImages}
          onImagesChange={handleOnImagesChange}
        />

        <button
          type="button"
          onClick={() => handleSaverecipe()}
          tabIndex="15"
          className="btn btn-success btn-block"
        >
          <FontAwesomeIcon icon={faSave} /> Save recipe
        </button>
      </form>
      <pre>{JSON.stringify(recipe, null, 2)}</pre>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide={true}
      >
        <Toast.Header closeButton={true}>
          <strong className="mr-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>{maxImgWarning}</Toast.Body>
      </Toast>
    </main>
  );
};

export default AddrecipePage;
