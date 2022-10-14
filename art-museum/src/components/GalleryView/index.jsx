import { useParams } from "react-router-dom";

export const GalleryView = ({galleries}) => {
    const {galleryId} = useParams();
    console.log(galleryId)
    const gallery = galleries.find(galleryId);
    console.log(gallery)

    return (
        <h2>{gallery.name}</h2>
    )
}