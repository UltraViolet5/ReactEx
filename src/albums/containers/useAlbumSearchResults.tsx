import { useState, useEffect, useRef } from "react";
import { Album } from "../../core/model/Album";
import { fetchAlbumSearchResults } from "../../core/services/MusicAPI";
import { Options } from "ky";

export function useFetch<T, TParam, TRet>(
  params: TParam,
  fetcher: (params?: TParam, options?: Options) => Promise<T>,
  selector: (res: T) => TRet
) {
  const [data, setData] = useState<TRet>();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const ctrl = useRef<AbortController>();

  useEffect(() => {
    if (!params) return;

    ctrl.current?.abort();
    ctrl.current = new AbortController();

    setIsLoading(true);
    setError(undefined);

    fetcher(params, { signal: ctrl.current.signal })
      .then((data) => setData(selector(data)))
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [params]);

  return {
    isLoading,
    error,
    data,
  };
}

export function useAlbumSearchResults(query: string) {
  return useFetch(query, fetchAlbumSearchResults, (data) => data.albums.items);
}

// export function useAlbumSearchResults(query: string) {
//   const [albums, setAlbums] = useState<Album[]>([]);
//   const [error, setError] = useState<unknown>();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     setIsLoading(true);
//     setError(undefined);

//     fetchAlbumSearchResults(query)
//       .then((data) => setAlbums(data.albums.items))
//       .catch(setError)
//       .finally(() => setIsLoading(false));
//   }, [query]);

//   return {
//     isLoading,
//     error,
//     albums,
//   };
// }
