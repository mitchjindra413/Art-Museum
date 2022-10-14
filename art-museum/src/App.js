import {GalleryNavigation} from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import {GalleryView} from './components/GalleryView'
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
        <Route path="/galleries/galleryId" component={GalleryView}/>
      </Switch>
    </> 
  );
}

export default App;
