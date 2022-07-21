import { useState, React } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasks, setTasks] = useState(TASKS);

  const onCategoryChange = (e) => {
    setSelectedCategory(prevValue => e.target.value)
  }

  const onTaskFormSubmit = (newTask) => {
    setTasks([
      ...tasks,
      newTask
    ]);
  }

  const tasksToDisplay = tasks.filter( task => {
    if( selectedCategory === 'All' ) {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={ CATEGORIES }
        selectedCategory={ selectedCategory }
        onCategoryChange={ onCategoryChange }
        />
      <NewTaskForm categories={ CATEGORIES } onTaskFormSubmit={ onTaskFormSubmit } />
      <TaskList tasks={ tasksToDisplay } />
    </div>
  );
}

export default App;
