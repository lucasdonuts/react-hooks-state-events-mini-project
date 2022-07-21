import { useState, React } from "react";

function CategoryFilter({ categories, onCategoryChange, selectedCategory }) {
  const [selectedButton, setSelectedButton] = useState('All')

  const selectCategory = (e) => {
    onCategoryChange(e);
    setSelectedButton(prevButton => e.target.value)
  }

  const categoryButtons = categories.map( category => {
      const key = Math.floor(Math.random() * 100000)
      return(
        <button
          key={ key }
          value={ category }
          onClick={ selectCategory }
          className={ selectedButton === category ? 'selected' : ''}
        >
          { category }
        </button>
      )
    })
    
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { categoryButtons }
    </div>
  );
}

export default CategoryFilter;
