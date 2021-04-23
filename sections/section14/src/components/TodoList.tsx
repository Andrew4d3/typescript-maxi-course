import React from "react";

interface TodoProps {
   items: { name: string }[];
}

// To define what Type our component props will receive we use generics
const TodoList: React.FC<TodoProps> = (props) => {
   return (
      <ul>
         {/* Now TS understand props has a TodoProps interface */}
         {props.items.map((item, i) => (
            <li key={i}>{item.name}</li>
         ))}
      </ul>
   );
};

export default TodoList;
