import ky from "ky";
import { getToken } from "./Auth";

export const MusicAPI = ky.create({
    // headers: {
    //     Authorization: `Bearer lubieplacki` 
    // },
    prefixUrl: 'https://api.spotify.com/v1/', // TODO: Config
    hooks: { // Axios -> Interceptors
        beforeRequest: [
            (request) => {
                request.headers.set('Authorization', `Bearer ${getToken()}`) // TODO: Get real token!
                return request
            }
        ],
        beforeError: [
            async (error) => {
                const data = await error.response.json<SpotifyError>()
                error.message = data.error.message
                return error
            }
        ]
    }
})

export interface SpotifyError {
    error: {
        status: number;
        message: string;
    };
}
