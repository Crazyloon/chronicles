import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import PreparationSteps from "../../form-parts/add-recipie-form/PreparationSteps";
import Ingredients from "../../form-parts/add-recipie-form/Ingredient";
import PrimaryInfo from "../../form-parts/add-recipie-form/PrimaryInfo";
import ImageUpload from "../../form-parts/img-upload/ImageUpload";
import { Toast } from 'react-bootstrap';
import axios from 'axios';
//import { HorizontalBorder } from "../../../border/border";

const AddRecipiePage = ({initialSteps, initialIngredients}) => {
  let [steps, setSteps] = useState(initialSteps || []);
  let [ingredients, setIngredients] = useState(initialIngredients || []);
  let [recipie, setRecipie] = useState({});
  let [images, setImages] = useState([]);
  let [previewImages, setPreviewImages] = useState([]);
  let [showToast, setShowToast] = useState(false);
  let [formData, setFormData] = useState();

  let maxImages = 6;
  let maxImgWarning = `A maximum of ${maxImages} images are allowed at once`

  const handleAddStep = () => {
    setSteps([...steps, { text: "", edit: true }]);
  };
  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { name: "", amount: 1, measurement: "", edit: true },
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
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.name = data;
    setIngredients([...updatedIngredients]);
  };
  const handleMeasurementChange = (event, i) => {
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.measurement = data;
    setIngredients([...updatedIngredients]);
  };
  const handleAmountChange = (event, i) => {
    let updatedIngredients = [...ingredients];
    let ingredient = updatedIngredients[i];
    let data = event.target.value;
    ingredient.amount = data;
    setIngredients([...updatedIngredients]);
  };

  const handleOnImagesChange = (event) => {
    let files = event.target.files;
    // setup for upload
    let imgData = new FormData();//.append('images', files);
    
    let imgFiles = [];
    

    // setup for preview
    if(files.length > maxImages) {
      setShowToast(true);
      return;
    }
    let keys = Object.keys(files);
    let imgs = [];
    keys.forEach((key, i) => {
      imgFiles[i] = files.item(i);
      let url = URL.createObjectURL(files[i]);
      imgs.push({ src: url });
    });
    setPreviewImages(imgs);

    imgFiles.forEach((img, i) => {
      console.log(img);
      imgData.append('images', img, img.name);
      console.log('img data', imgData);
    });
    setImages(imgFiles);
    setFormData(imgData);
    console.log("IMG DATA: ", images, formData);
  }

  const handleSaveRecipie = () => {
    setRecipie({
      ...recipie, 
      steps: steps,
      ingredients: ingredients
    });
    console.log(`recipie saved: ${JSON.stringify(recipie)}`);
    
    let config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    formData.append('recipie', JSON.stringify(recipie));
    axios.post("/api/recipie", formData, config).then(resp => console.log("RESPOSNE", resp));
    // axios.post("/api/recipie", recipie).then(resp => console.log("RESPOSNE", resp));
  };

  return (
    <main className="add-recipie-page bg-lg">
      <div className="add-recipie-header">
        <h3>Add Recipie</h3>
      </div>
      <form className="form add-recipie-body bg-w" encType='mulipart/form-data'>
        <PrimaryInfo
          handleNameChange={handleNameChange}
          handleSummaryChange={handleSummaryChange}
          handleServingsChange={handleServingsChange}
          handlePrepTimeChange={handlePrepTimeChange}
          handleCookTimeChange={handleCookTimeChange}
        />

        <Ingredients
          ingredients={ingredients}
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

        <ImageUpload images={previewImages} onImagesChange={handleOnImagesChange} />

        <button
          type="button"
          onClick={() => handleSaveRecipie()}
          tabIndex="14"
          className="btn btn-success btn-block"
        >
          <FontAwesomeIcon icon={faSave} /> Save Recipie
        </button>
      </form>
      <pre>
        {JSON.stringify(recipie, null, 2)}
      </pre>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide={true}>
        <Toast.Header closeButton={true}>
          <strong className="mr-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body>{maxImgWarning}</Toast.Body>
      </Toast>
    </main>
  );
};

export default AddRecipiePage;
