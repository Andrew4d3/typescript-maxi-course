How can we use TS with React? (using CRA)

---

We can run this command:

```
create-react-app <PROJECT NAME> --template typescript
```

===

What do we have to do with React component when we want to declare what type the props parameter accepts? (Using TS)

---

We need to use Generics in the component declaration

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section14/src/components/TodoList.tsx#L8)

===

When working with refs in React, how can we indicate what type the ref element will be refering to? (in TS)

---

We use generics on this way (example)

```
const myRef = useRef<HTMLInputElement>(initialValue);
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section14/src/components/NewTodo.tsx#L9)

===

When using the hook `useState` in React with TS, how can we let TS know which type is associated to the state?

---

Using Generics, like this:

```
const [todos, setTodos] = useState<Todo[]>(todoList);
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section14/src/App.tsx#L17)
