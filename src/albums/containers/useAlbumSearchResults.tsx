import { useState, useEffect } from "react";
import { Album } from "../../core/model/Album";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";

export function useAlbumSearchResults(query: string) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    setError(undefined);

    fetchAlbumSearchResults(query)
      .then((data) => setAlbums(data.albums.items))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [query]);

  return {
    isLoading,
    error,
    albums,
  };
}
