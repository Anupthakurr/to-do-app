function Todoitem({ Todoname, Tododate, ondelete }) {
  return (
    <div class="container">
      <div class="row row1">
        <div class="col-6 ">{Todoname}</div>
        <div class="col-4">{Tododate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger button1"
            onClick={() => ondelete(Todoname)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
