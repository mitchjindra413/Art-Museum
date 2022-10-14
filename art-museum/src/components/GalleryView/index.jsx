import { useParams } from "react-router-dom";
import { ArtImageTile } from "../ArtImageTile";

export const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    
    const gallery = galleries.find(obj => obj.galleryid == galleryId);
    const pics = ArtImageTile(gallery);
    

    return (
        <h2>{gallery.name}</h2>
        
    )
}