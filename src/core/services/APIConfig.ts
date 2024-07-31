import ky from "ky";

export const MusicAPI = ky.create({
    // headers: {
    //     Authorization: `Bearer lubieplacki` 
    // },
    prefixUrl: 'https://api.spotify.com/v1/', // TODO: Config
    hooks: { // Axios -> Interceptors
        beforeRequest: [
            (request, options) => {
                request.headers.set('Authorization', `Bearer lubieplacki`) // TODO: Get real token!
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
