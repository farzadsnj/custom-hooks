import "./App.css";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import UserFrom from "./hooks/UserFrom";

function App() {
  return (
    <div className="App">
      <UserFrom />
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default App;
