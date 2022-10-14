import {GalleryNavigation} from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import {GalleryView} from './components/GalleryView'
import { Route, Switch, Redirect } from "react-router-dom";
import {Home} from './components/Home'
import{Errors} from './components/Errors'


function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route path="/errors"><Errors /></Route>

        <Route exact path="/"><Home /></Route>

        <Redirect to="/errors"><Errors /></Redirect>
      </Switch>
    </div> 
  );
}

export default App;
