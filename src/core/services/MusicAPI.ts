import { AlbumResponse } from "../model/Album";
import mockAlbums from "../model/mockAlbums";


export function fetchAlbumSearchResults(query = 'batman') {

    const promise = fetch('http://localhost:5173/albums.json')
        .then(resp => resp.json())
        // .then(data => console.log(data))

    return promise as Promise<AlbumResponse[]>
}