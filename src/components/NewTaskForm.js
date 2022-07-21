import { useState, React } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  const onFormChange = (e) => {
    setFormData( formData => {
      return {
        ...formData,
        [e.target.name]: e.target.value
        }
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: formData.text,
      category: formData.category
    }

    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={ handleSubmit }>
      <label>
        Details
        <input type="text" name="text" onChange={ onFormChange } />
      </label>
      <label>
        Category
        <select name="category" onChange={ onFormChange }>
          { categories.map( category => {
            const key = Math.floor(Math.random() * 100000)
            return (
              category === 'All' ? null : <option key={ key } value={ category }>{ category }</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
