import "./App.css";
import { Todo } from "./components/Todo";
import { useSelector } from "react-redux";
import { Login } from "./components/Login";

const App = () => {
  const user = useSelector((state) => state.authReducer.isLoggedIn);

  return <div className="App">{user ? <Todo /> : <Login />}</div>;
};

export default App;
