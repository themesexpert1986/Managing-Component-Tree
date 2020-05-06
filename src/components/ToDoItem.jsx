import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone(prevValue => !prevValue);
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.ToDoItem}
      </li>
    </div>
  );
}

export default ToDoItem;
