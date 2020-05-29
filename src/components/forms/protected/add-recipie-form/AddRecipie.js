import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PreparationSteps from "../../form-parts/add-recipie-form/PreparationSteps";
import Ingredients from "../../form-parts/add-recipie-form/Ingredient";
import PrimaryInfo from "../../form-parts/add-recipie-form/PrimaryInfo";
import ImageUpload from "../../form-parts/img-upload/ImageUpload";
import { Toast } from "react-bootstrap";
import axios from "axios";

const AddRecipiePage = ({ initialSteps, initialIngredients }) => {
  let [recipie, setRecipie] = useState({ ingredients: [], steps: [] });
  let [previewImages, setPreviewImages] = useState([]);
  let [showToast, setShowToast] = useState(false);
  let [formData, setFormData] = useState();

  let maxImages = 6;
  let maxImgWarning = `A maximum of ${maxImages} images are allowed at once`;

  const handleAddStep = () => {
    setRecipie({
      ...recipie,
      steps: [...recipie.steps, { text: "", edit: true }],
    });
  };
  const handleAddIngredient = () => {
    setRecipie({
      ...recipie,
      ingredients: [
        ...recipie.ingredients,
        { name: "", amount: 1, measurement: "", edit: true },
      ],
    });
  };
  const handleDeleteStep = (i) => {
    let filteredSteps = [...recipie.steps];
    filteredSteps = filteredSteps
      .slice(0, i)
      .concat(filteredSteps.slice(i + 1, filteredSteps.length));
    setRecipie({ ...recipie, steps: filteredSteps });
  };

  const handleDeleteIngredient = (i) => {
    let filteredIngredients = [...recipie.ingredients];
    filteredIngredients = filteredIngredients
      .slice(0, i)
      .concat(filteredIngredients.slice(i + 1, filteredIngredients.length));
    setRecipie({ ...recipie, ingredients: filteredIngredients });
  };

  const toggleEditIngredient = (i) => {
    let editIngredients = [...recipie.ingredients];
    let ingredient = editIngredients[i];
    if (!("edit" in ingredient)) ingredient.name = "";
    ingredient.edit = !ingredient.edit;
    setRecipie({ ...recipie, ingredients: editIngredients });
  };

  const toggleEditStep = (i) => {
    let editSteps = [...recipie.steps];
    let step = editSteps[i];
    if (!("edit" in step)) step.text = "";
    step.edit = !step.edit;
    setRecipie({ ...recipie, steps: editSteps });
  };

  const handleStepTextChange = (event, i) => {
    let text = event.target.value;
    let stepsList = [...recipie.steps];
    let step = stepsList[i];
    step.text = text;
    setRecipie({ ...recipie, steps: stepsList });
  };

  const handleNameChange = (event) => {
    let data = event.target.value;
    setRecipie({ ...recipie, name: data });
  };
  const handleSummaryChange = (event) => {
    let data = event.target.value;
    setRecipie({ ...recipie, summary: data });
  };
  const handleServingsChange = (event) => {
    let data = event.target.value;
    setRecipie({ ...recipie, servings: data });
  };
  const handlePrepTimeChange = (event) => {
    let data = event.target.value;
    setRecipie({ ...recipie, prepTime: data });
  };
  const handleCookTimeChange = (event) => {
    let data = event.target.value;
    setRecipie({ ...recipie, cookTime: data });
  };

  const handleIngredientNameChange = (event, i) => {
    let updatedIngredients = [...recipie.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.name = data;
    setRecipie({ ...recipie, ingredients: [...updatedIngredients] });
  };

  const handleMeasurementChange = (event, i) => {
    let updatedIngredients = [...recipie.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.measurement = data;
    setRecipie({ ...recipie, ingredients: [...updatedIngredients] });
  };
  
  const handleAmountChange = (event, i) => {
    let updatedIngredients = [...recipie.ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.amount = data;
    setRecipie({ ...recipie, ingredients: [...updatedIngredients] });
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

  const handleSaveRecipie = () => {
    let config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("recipie", JSON.stringify(recipie));
    formData.append("event", 'UPLOAD_RECIPIE');
    setFormData(formData);
    axios
      .post("/api/recipie", formData, config)
      .then((resp) => console.log("RESPOSNE", resp));
  };

  return (
    <main className="add-recipie-page bg-lg">
      <div className="add-recipie-header">
        <h3>Add Recipie</h3>
      </div>
      <form className="form add-recipie-body bg-w" encType="mulipart/form-data">
        <PrimaryInfo
          handleNameChange={handleNameChange}
          handleSummaryChange={handleSummaryChange}
          handleServingsChange={handleServingsChange}
          handlePrepTimeChange={handlePrepTimeChange}
          handleCookTimeChange={handleCookTimeChange}
        />

        <Ingredients
          ingredients={recipie.ingredients}
          handleAddIngredient={handleAddIngredient}
          handleDeleteIngredient={handleDeleteIngredient}
          toggleEditIngredient={toggleEditIngredient}
          handleIngredientNameChange={handleIngredientNameChange}
          handleAmountChange={handleAmountChange}
          handleMeasurementChange={handleMeasurementChange}
        />

        <PreparationSteps
          steps={recipie.steps}
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
          onClick={() => handleSaveRecipie()}
          tabIndex="15"
          className="btn btn-success btn-block"
        >
          <FontAwesomeIcon icon={faSave} /> Save Recipie
        </button>
      </form>
      <pre>{JSON.stringify(recipie, null, 2)}</pre>
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

export default AddRecipiePage;
