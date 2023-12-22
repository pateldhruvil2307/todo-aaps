"use client";

import { useState } from "react";

const Country = () => {
  // Initialize task and description with empty strings
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  // Initialize mainTask as an empty array
  const [mainTask, setMainTask] = useState([]);

  // Define the submitHandler function with the event parameter (e)
  const submitHandler = (e) => {
    e.preventDefault();

    // Add a new task to the mainTask array
    setMainTask([...mainTask, { task, description }]);

    // Clear task and description fields after submission
    setTask("");
    setDescription("");
  };

  const deletfile = (i) => {
    let delete1 = [...mainTask];
    delete1.splice(i, 1);
    setMainTask(delete1);
  };

  let renderTask;

  if (mainTask.length === 0) {
    renderTask = <h2>No Task Available</h2>;
  } else {
    renderTask = mainTask.map((t, i) => (
      <div key={i}>
        <h5>{t.task}</h5>
        <h5>{t.description}</h5>
      </div>
    )); 
  }

  return (
    <>
      <h1 className="bg-dark text-white text-center ">Todo-APP</h1>
      <form   onSubmit={submitHandler}>
        {/* Task input with two-way binding */}
        <input
          type="text"
          placeholder="Enter tasks"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        {/* Description input with two-way binding */}
        <input
          type="text"
          placeholder="Enter Description here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        {/* Button */}
        <button type="submit">Add Task</button>
      </form>

      <button
        onClick={() => {
          deletfile()
        }}
      >

        delete
      </button>

      <hr />
      {renderTask}
    </>
  );
};

export default Country;
