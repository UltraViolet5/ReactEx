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

const client = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
