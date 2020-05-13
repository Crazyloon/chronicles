import React from "react";

const PrimaryInfo = ({
  handleNameChange,
  handleSummaryChange,
  handleServingsChange,
  handlePrepTimeChange,
  handleCookTimeChange,
}) => {
  return (
    <section className="main-info-section">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className="form-control"
          type="text"
          placeholder="Garlic Shrimp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          className="form-control"
          type="text"
          placeholder="What type of dish is it? Where is it from?
            Which seasons is it best during? Why do you
            like it?"
        />
      </div>

      <div className='form-group'>
        <label htmlFor="servings">Servings:</label>
        <input
          id="servings"
          className="form-control"
          type="text"
          placeholder="4 cups"
        />
      </div>

      <div className='form-group'>
        <label htmlFor="prep-time">Prep Time (minutes):</label>
        <input
          id="prep-time"
          className="form-control"
          type="number"
          placeholder="20 minutes"
        />
      </div>
      
      <div className='form-group'>
        <label htmlFor="cook-time">Cook Time (minutes):</label>
        <input
          id="cook-time"
          className="form-control"
          type="number"
          placeholder="20 minutes"
        />
      </div>
    </section>
  );
};

export default PrimaryInfo;
