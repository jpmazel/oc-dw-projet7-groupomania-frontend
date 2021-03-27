import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil";
import FicheUtilisateur from "./pages/FicheUtilisateur";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/fiche-utilisateur" exact component={FicheUtilisateur} />
        <Route component={NotFound}></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
