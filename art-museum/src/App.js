import {GalleryNavigation} from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import {GalleryView} from './components/GalleryView'
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route path="/galleries/:galleryId" component={GalleryView(harvardArt.records)}/>
      </Switch>
    </div> 
  );
}

export default App;
