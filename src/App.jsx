import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Root error</h1>,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
        errorElement: <h1>Root error</h1>,
      },
      {
        path: "album/:albumId",
        errorElement: <h1>album error</h1>,
        element: <h1>Album</h1>,
      },
      {
        path: "search/",
        errorElement: <h1>search error</h1>,
        element: <h1>Search page</h1>,
      },
      {
        path: "artist/:artistId",
        errorElement: <h1>artist error</h1>,
        element: <h1>Artist</h1>,
      },
      {
        path: "user/:userId",
        errorElement: <h1>user profile Root error</h1>,
        children: [
          {
            path: "profile",
            element: <h1>Profile home</h1>,
            errorElement: <h1>user/profile error</h1>,
          },
          {
            path: "settings",
            errorElement: <h1>profile settings error</h1>,
            element: <h1>Profile settings</h1>,
          },
          {
            path: "collection",
            errorElement: <h1>collection error</h1>,
            children: [
              // => Recent
              {
                path: "recent",
                errorElement: <h1>recent error</h1>,
                element: <h1>Recent</h1>,
              },
              // => favorites
              {
                path: "favorites",
                errorElement: <h1>favorites error</h1>,
                element: <h1>Favorites</h1>,
              },
              //  => playlists
              {
                path: "playlists",
                errorElement: <h1>playlist error</h1>,
                element: <h1>Playlists</h1>,
                children: [
                  {
                    path: ":playlistId",
                    errorElement: <h1>playlist error</h1>,
                    element: <h1> specific Playlist</h1>,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <h1>Not found</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
