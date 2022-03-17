function Header() {
  return (
    <div>
      <header>
        <h1>Todo App</h1>
      </header>
    </div>
  );
}

function TextArea(props) {
  return (
    <form onSubmit={props.function} className="addToDo">
      <input type="text" id="abs" placeholder="Add your new todo" />
      <input type="submit" value={"qwer"} />
    </form>
  );
}

function List(props) {
  let i = true;
  return (
    <div className="todoList">
      <input
        type="checkbox"
        id={props.id}
        onClick={() => {
          if (i) {
            document.getElementById(props.index).style.textDecoration =
              "line-through";
            i = false;
          } else {
            document.getElementById(props.index).style.textDecoration = "none";
            i = true;
          }
        }}
      />
      <p id={props.index}>{props.text}</p>
      <button onClick={() => props.editList(props.id)}>EDIT</button>
      <button onClick={() => props.removeList(props.id)}>x</button>
    </div>
  );
}

class App extends React.Component {
  state = {
    todoList: [
      { text: "Buy a new gaming laptop", id: 1 },
      { text: "Complete a previous task", id: 2 },
      { text: "Create video for Youtube", id: 3 },
      { text: "Create a new portfolia site", id: 4 },
    ],
  };
  addToDoList = (e) => {
    let a = this.state.todoList.length;
    let b = this.state.todoList[a - 1].id + 1;

    e.preventDefault();
    let text1 = document.getElementById("abs").value;
    this.setState((prevState) => {
      return {
        todoList: [...prevState.todoList, { text: text1, id: b }],
      };
    });
    document.getElementById("abs").value = "";
  };
  removeList = (id) => {
    this.setState((prevState) => {
      return { todoList: prevState.todoList.filter((p) => p.id !== id) };
    });
  };

  editList = (id) => {
    this.setState((prevState) => {
      return {
        todoList: [
          ...prevState.todoList,
          { text: prompt("oorchloh text"), id: props.id },
        ],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <TextArea function={this.addToDoList} />
        {this.state.todoList.map((todoList, i) => (
          <List
            text={todoList.text}
            key={todoList.id}
            id={todoList.id}
            index={i}
            removeList={this.removeList}
            edit={this.editList}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
