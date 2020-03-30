import React from "react";
const Artist = React.lazy(() => import("../pages/Artist"));
const Playlist = React.lazy(() => import("../pages/Playlist"));

const routes =
  [
    {
      path: "/",
      name: "Playlist",
      component: Playlist,
      exact: true,
    },
    {
      path: "/artist/:id",
      exact: true,
      name: "Artist",
      component: Artist
    },
    {
      path: "/playlist",
      name: "Playlist",
      component: Playlist
    },
  ]

export default routes;
