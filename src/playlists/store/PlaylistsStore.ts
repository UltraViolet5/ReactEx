import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";


type State = {
    mode: "details" | "editor" | "creator";
    playlists: Playlist[];
    selectedId?: Playlist['id'];
};

export const playlistsInitialState: State = {
    mode: "details",
    playlists: mockPlaylists,
}


type Action =
    // | { type: 'SET_MODE', payload: { mode: State['mode'] } }
    | { type: 'CREATE_PLAYLIST', payload: { data: Playlist } }
    | { type: 'UPDATE_PLAYLIST', payload: { data: Playlist } }
    | ReturnType<typeof ChangeMode>
    | ReturnType<typeof SelectPlaylist>


export const SelectPlaylist = (id: Playlist['id']) =>
    ({ type: 'SELECT_PLAYLIST', payload: { id } }) as const

export const ChangeMode = (mode: State['mode']) =>
    ({ type: 'SET_MODE', payload: { mode } }) as const


export function playlistsReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_MODE': return { ...state, mode: action.payload.mode }
        case 'SELECT_PLAYLIST': return {
            ...state, selectedId: action.payload.id
        }
        case 'CREATE_PLAYLIST': return {
            ...state, playlists: [...state.playlists, action.payload.data]
        }
        case 'UPDATE_PLAYLIST': {
            const draft = action.payload.data;
            return {
                ...state, playlists: state.playlists.map((p) => (p.id === draft.id ? draft : p))
            }
        }
        default: return state
    }
}

export const selectedPlaylist = (state: State) => {
    return state.playlists.find(p => p.id === state.selectedId)
}