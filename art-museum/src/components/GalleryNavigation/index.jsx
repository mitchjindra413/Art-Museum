import { NavLink } from "react-router-dom";

export const GalleryNavigation = ({galleries}) => {
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">Home Page</NavLink>
            {
                for (let i = 0; i < galleries.length; i++) {
                    return (<NavLink to={`/galleries/${galleries[i].id}`}></NavLink>)
                }
            }
        </nav>
    )
}