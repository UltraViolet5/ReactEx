const client_id = '348275ad55044c3b8d42e987d97995a0';
const redirect_uri = 'http://localhost:5173/callback';
const scope = 'user-read-private user-read-email';


let token: string | null = null

export const initLogin = () => {

    const params = new URLSearchParams({
        response_type: 'token',
        client_id,
        scope,
        redirect_uri,
        show_dialog: 'true'
    })

    window.location.href = 'https://accounts.spotify.com/authorize?' + params
}

export const checkLogin = () => {
    const params = new URLSearchParams(window.location.hash)
    const access_token = params.get('#access_token')

    if (access_token) {
        token = access_token;
        sessionStorage.setItem('token', access_token)
        window.location.hash = ''
    } else {
        token = sessionStorage.getItem('token')
    }

    return !!token
}

export const logout = () => {
    token = '';
    sessionStorage.removeItem('token')
}

export const getToken = () => {
    return token
}