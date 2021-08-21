import InputsComp from './views/Inputs'
import ListComp from './views/List'
import NavComp from './components/Nav'
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState(0);
  const [res, setRes] = useState({});

  const handleChangeView = (vNbr = 0) => {
    if (vNbr < 0 || viewsList.length <= vNbr) return;

    setView(vNbr)

    const url = new URL(window.location.href);
    url.searchParams.set('l', vNbr);
    window.history.pushState({}, '', url);
  }

  useEffect(() => {
    const parameters = new URL(window.location.href).searchParams

    const curLoc = Number(parameters.get('l'));

    if (!isNaN(curLoc)) handleChangeView(curLoc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const viewsList = [
    {v: <InputsComp view={view} setView={handleChangeView} setRes={setRes} />, navInfo: "Wpisz dane"},
    {v: <ListComp res={res} />, navInfo: "Lista użytkowników"}];

  return (
    <div className="App">
      <NavComp
        setView={handleChangeView}
        viewsList={viewsList} />
      {viewsList[view].v}
    </div>
  );
}

export default App;
