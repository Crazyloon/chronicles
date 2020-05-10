import React from "react";
import RecipieHero from "../components/recipie-hero/recipie-hero";
import { shrimpRecipie } from "../models/garlicshrimp-meal";
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
  // get the recipie by it's id:
  id = "garlic-shrimp";
  name = shrimpRecipie.name;
  summary = shrimpRecipie.summary;
  ingredients = shrimpRecipie.ingredients;
  tools = shrimpRecipie.tools;
  tags = shrimpRecipie.tags;
  steps = shrimpRecipie.steps;
  raiting = shrimpRecipie.raiting;
  servings = shrimpRecipie.servings;
  hero = shrimpRecipie.hero;
  gallery = shrimpRecipie.gallery;
  time = shrimpRecipie.time;

  return (
    <section className='dish-page col-sm-8 offset-sm-2 bg-lg'>
      <RecipieHero hero={hero} name={name} time={time} raiting={raiting} servings={servings}/>
      
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
