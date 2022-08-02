import "./App.css";
import FormInputs from "./components/FormInputs";

function App() {
  return (
    <div className="app">
      <form>
        <FormInputs placeholder={"Username"} />
        <FormInputs placeholder={"Email"} />
        <FormInputs placeholder={"Full name"} />
        <FormInputs placeholder={" Sth else"} />
      </form>
    </div>
  );
}

export default App;
