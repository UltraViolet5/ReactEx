import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import AlbumSearchView from "./albums/containers/AlbumSearchView.tsx";
import PlaylistsView from "./playlists/containers/PlaylistsView.tsx";
import AlbumDetailView from "./albums/containers/AlbumDetailView.tsx";
import { HTTPError } from "ky";
import { checkLogin } from "./core/services/Auth.ts";
import { fetchAlbumById } from "./core/services/MusicAPI.ts";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount, error) {
        if (failureCount > 3) return false;

        if (
          error instanceof HTTPError &&
          [0, 500, 426].includes(error.response.status)
        )
          return true;

        return false;
      },
      retryDelay(failureCount, error) {
        return 500 * failureCount ** 2;
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader() {
      return checkLogin();
    },
    children: [
      {
        index: true,
        loader: () => redirect("/music/search"),
      },
      {
        path: "music",
        children: [
          {
            path: "search",
            element: <AlbumSearchView />,
          },
          {
            path: "albums/:albumId",
            element: <AlbumDetailView />,
            loader: async ({ params, request, context }) => {
              if (!params["albumId"])
                throw new Response("Not Found", { status: 404 });

              return fetchAlbumById(params["albumId"]);
            },
          },
        ],
      },
      {
        path: "playlists",
        lazy: () =>
          import("./playlists/containers/PlaylistsView.tsx").then((e) => ({
            Component: e.default,
          })),
      },
      {
        path: "callback",
        loader() {
          checkLogin();
          return redirect("/music/search");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
