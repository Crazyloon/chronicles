import React from "react";
import recipeHero from "../components/recipe-hero/recipe-hero";
import { shrimprecipe } from "../models/garlicshrimp-meal";
import ThumbNailGallery from "../components/thumbnail/thumbnail-gallery";

const Dish = ({
  id,
  name,
  summary,
  ingredients,
  tools,
  tags,
  steps,
  raiting,
  servings,
  hero,
  gallery,
  time,
}) => {
  // get the recipe by it's id:
  id = "garlic-shrimp";
  name = shrimprecipe.name;
  summary = shrimprecipe.summary;
  ingredients = shrimprecipe.ingredients;
  tools = shrimprecipe.tools;
  tags = shrimprecipe.tags;
  steps = shrimprecipe.steps;
  raiting = shrimprecipe.raiting;
  servings = shrimprecipe.servings;
  hero = shrimprecipe.hero;
  gallery = shrimprecipe.gallery;
  time = shrimprecipe.time;

  return (
    <section className='dish-page col-sm-8 offset-sm-2 bg-lg'>
      <recipeHero hero={hero} name={name} time={time} raiting={raiting} servings={servings}/>
      
      <div className='dish-body bg-w'>
        <ThumbNailGallery thumbnails={gallery} />
        
        <div className='details-panel dish-summary bg-tlg mb-3'>
          <h3 className='summary-heading'>{name}</h3>
          <p className='summary-detail'>{summary}</p>
        </div>

        <div className='details-panel dish-ingredients bg-tlg mb-3'>
          <h3 className='ingredient-heading'>Ingredients</h3>
          <p className='ingredient-detail'>
            <ol className='ingredient-list'>
              {ingredients.map(ingredient => (
                <li>
                  {ingredient.amount} {ingredient.measurement} {ingredient.name}
                </li>
              ))}
            </ol>
          </p>
        </div>
        
        <div className='details-panel dish-ingredients bg-tlg'>
          <h3 className='ingredient-heading'>Steps</h3>
          <p className='ingredient-detail'>
            <ol className='ingredient-list'>
              {steps.map(step => (
                <li>
                  {step}
                </li>
              ))}
            </ol>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dish;
