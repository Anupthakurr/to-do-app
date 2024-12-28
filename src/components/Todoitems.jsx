import Todoitem from "./Todoitem";

function Todoitems({ todoitems, ondelete }) {
  return (
    <div className="item-container">
      {todoitems.map((item, index) => (
        <Todoitem
          key={index}
          Todoname={item.name}
          Tododate={item.dueDate}
          ondelete={ondelete}
        />
      ))}
    </div>
  );
}

export default Todoitems;
