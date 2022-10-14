import { NavLink } from "react-router-dom";

export const GalleryNavigation = ({galleries}) => {
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/">Home Page</NavLink>
            {galleries.map(gallery => 
                (<NavLink key={gallery.galleryid} to={`/galleries/${gallery.galleryid}`}>{`${gallery.name}`}</NavLink>)
            )}
        </nav>
    )
}