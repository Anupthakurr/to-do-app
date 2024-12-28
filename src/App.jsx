import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import Welcomemessage from "./components/Welcomemessage";
import { useState } from "react";
import "./App.css";

function App() {
  const [todoitems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDuedate) => {
    if (itemName && itemDuedate) {
      const newTodoItems = [
        ...todoitems,
        { name: itemName, dueDate: itemDuedate },
      ];
      setTodoItems(newTodoItems);
    }
  };

  const handledeleteitem = (todoitemname) => {
    const newitem = todoitems.filter((item) => item.name !== todoitemname);
    setTodoItems(newitem);
  };

  return (
    <center className="app-container">
      <Appname />
      <Addtodo onNewitem={handleNewItem} />
      {todoitems.length === 0 && <Welcomemessage></Welcomemessage>}
      <Todoitems todoitems={todoitems} ondelete={handledeleteitem} />
    </center>
  );
}

export default App;
