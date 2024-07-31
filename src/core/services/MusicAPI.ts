import {  AlbumSearchResponse, PagingObject } from "../model/Album";
import { Playlist } from "../model/Playlist";
import { MusicAPI } from "./APIConfig";

export function fetchAlbumSearchResults(query = 'batman') {
    return MusicAPI.get('search', {
        searchParams: {
            type: 'album', q: query
        },
    }).json<AlbumSearchResponse>();
}


export function fetchPlaylists() {
    return MusicAPI.get('me/playlists', {}).json<PagingObject<Playlist>>();
}


// export function fetchAlbumSearchResults(query = 'batman') {
//     return ky.get('https://api.spotify.com/v1')
//         .then(resp => resp.json<AlbumResponse[]>())
// }

// export function fetchAlbumSearchResults(query = 'batman') {

//     // const promise = fetch('http://localhost:5173/albums.json')
//     const promise = fetch('https://api.spotify.com/v1')
//         .then(resp => resp.ok ? resp.json() : Promise.reject('Error'))
//         .then(res => {
//             return res
//         })

//     return promise as Promise<AlbumResponse[]>
// }

// resPromise = fetch('https://api.spotify.com/v1')
// await (await resPromise).json()

// resPromise = fetch('https://api.spotify.com/v1')
// resPromise.json = () => (await resPromise).json() // Fake "outer" json()
