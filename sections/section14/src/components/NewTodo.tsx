import React, { useRef } from "react";

interface NewTodoProps {
   onNewTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
   // We need to indicate which data type the ref element will be holding
   const textInputRef = useRef<HTMLInputElement>(null);

   const todoSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault();
      const enteredText = textInputRef.current!.value;
      props.onNewTodo(enteredText);
   };

   return (
      <form onSubmit={todoSubmitHandler}>
         <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
         </div>
         <button type="submit">ADD TODO</button>
      </form>
   );
};

export default NewTodo;
