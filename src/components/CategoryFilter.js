import { useState, React } from "react";

function CategoryFilter({ categories, onCategoryChange, selectedCategory }) {
  const [selectedButton, setSelectedButton] = useState('All')

  const selectCategory = (e) => {
    onCategoryChange(e);
    // e.target.classList.add('selected')
    setSelectedButton(prevButton => e.target.value)
  }

  const setClass = (button) => {
    if ( button.value === selectedCategory ) {
      return 'selected'
    } else {
      return ''
    }
  }

  const categoryButtons = categories.map( category => {
      const key = Math.floor(Math.random() * 100000)
      // const isSelected = category === selectedCategory ? 'selected' : '';
      return(
        <button
          key={ key }
          value={ category }
          onClick={ selectCategory }
          className={ selectedButton === category ? 'selected' : '' }
          // className={ isSelected }
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
