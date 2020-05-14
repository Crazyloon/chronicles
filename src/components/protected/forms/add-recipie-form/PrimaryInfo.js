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
          tabIndex='1'
          onChange={(event) => handleNameChange(event)}
          className="form-control"
          type="text"
          placeholder="Garlic Shrimp"
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          tabIndex='2'
          onChange={(event) => handleSummaryChange(event)}
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
          tabIndex='3'
          onChange={(event) => handleServingsChange(event)}
          className="form-control"
          type="text"
          placeholder="4 cups"
        />
      </div>

      <div className='form-group'>
        <label htmlFor="prep-time">Prep Time (minutes):</label>
        <input
          id="prep-time"
          tabIndex='4'
          onChange={(event) => handlePrepTimeChange(event)}
          className="form-control"
          type="number"
          placeholder="20 minutes"
        />
      </div>
      
      <div className='form-group'>
        <label htmlFor="cook-time">Cook Time (minutes):</label>
        <input
          id="cook-time"
          tabIndex='5'
          onChange={(event) => handleCookTimeChange(event)}
          className="form-control"
          type="number"
          placeholder="20 minutes"
        />
      </div>
    </section>
  );
};

export default PrimaryInfo;
