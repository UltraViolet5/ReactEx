import mockAlbums from "../model/mockAlbums";


export function fetchAlbumSearchResults(query = 'batman') {
    console.log(query);

    // FIXME: Make real Request!
    return mockAlbums
}