import InputsComp from './views/Inputs'
import ListComp from './views/List'
import NavComp from './components/Nav'
import { useState } from "react";

function App() {
  const [view, setView] = useState(0);
  const [res, setRes] = useState({});

  const viewsList = [
    {v: <InputsComp view={view} setView={setView} setRes={setRes} />, navInfo: "Wpisz dane"},
    {v: <ListComp res={res} />, navInfo: "Lista użytkowników"}];

  return (
    <div className="App">
      <NavComp
        setView={setView}
        viewsList={viewsList} />
      {viewsList[view].v}
    </div>
  );
}

export default App;
