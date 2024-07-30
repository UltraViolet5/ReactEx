import { mockPlaylists } from "../../core/model/mockPlaylists";
import { Playlist } from "../../core/model/Playlist";


type State = {
    mode: string;
    playlists: Playlist[];
    selectedId?: Playlist['id'];
};

const initialState: State = {
    mode: "details",
    playlists: mockPlaylists,
}
