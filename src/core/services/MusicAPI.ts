import ky, { HTTPError } from "ky";
import { AlbumResponse } from "../model/Album";
import mockAlbums from "../model/mockAlbums";

const MusicAPI = ky.create({
    headers: {
        Authorization: `Bearer lubieplacki` // TODO: Get real token!
    },
    prefixUrl: 'https://api.spotify.com/v1/', // TODO: Config
})

export async function fetchAlbumSearchResults(query = 'batman') {
    try {
        return await MusicAPI.get('search', {
            searchParams: {
                type: 'album', q: query
            },
        }).json<AlbumResponse[]>();
    } catch (error: unknown) {
        if (!(error instanceof HTTPError)) throw new Error('Unexpected error!')

        const data = await error.response.json<SpotifyError>()
        return Promise.reject(new Error(data.error.message))
    }
}


export interface SpotifyError {
    error: {
        status: number;
        message: string;
    };
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
