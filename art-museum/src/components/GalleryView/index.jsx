import { useParams } from "react-router-dom";

export const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    
    const gallery = galleries.find(obj => obj.galleryid == galleryId);

    return (
        <h2>{gallery.name}</h2>
    )
}