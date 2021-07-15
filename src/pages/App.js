import { Provider } from "react-redux";
import { Routes, store } from "../configs";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
