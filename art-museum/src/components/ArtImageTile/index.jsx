export const ArtImageTile = (gallery) => {
    const objects = gallery.objects;
    const pics = [];
    for (let i = 0; i < objects.length; i++) {
        pics.push(objects[i].images[0].baseimageurl);
    }
    return pics;
}