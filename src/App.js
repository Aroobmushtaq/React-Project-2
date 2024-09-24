import react from "react"
import './index.css'; 
import AddTodo from "./ReduxToolKit/components/addTodo";
import Todo from "./ReduxToolKit/components/todo";
// import Login from "./config/login";

function App() {
  return (
    <div>
    {/* <Login/> */}
    <AddTodo/>
    <Todo/>
    </div>
  );
}

export default App;
