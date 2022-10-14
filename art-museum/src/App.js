import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records}/>
    </> 
  );
}

export default App;
