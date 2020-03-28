import React from "react";
const Artist = React.lazy(() => import("../pages/Artist"));
const Playlist = React.lazy(() => import("../pages/Playlist"));

const routes =
 [
   {
     path: "/",
     name: "Playlist",
     component: Playlist
   },
   {
      path: "/artist",
      exact: true,
      name: "Artist",
      component: Artist
    },
  ]

export default routes;
