import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/Root";
import HomePage from "@/components/HomePage";
import AlbumPage from "@/components/AlbumPage";
import YetToBe from "@/components/YetToBe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Root error</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <h1>Root error</h1>,
      },
      {
        path: "album/:albumId",
        errorElement: <h1>album error</h1>,
        element: <AlbumPage />,
      },
      {
        path: "search/",
        errorElement: <h1>search error</h1>,
        element: <YetToBe />,
      },
      {
        path: "artist/:artistId",
        errorElement: <h1>artist error</h1>,
        element: <h1>Artist</h1>,
      },
      {
        path: "user/",
        errorElement: <h1>user profile Root error</h1>,
        children: [
          {
            path: "profile",
            element: <YetToBe />,
            errorElement: <h1>user/profile error</h1>,
          },
          {
            path: "settings",
            errorElement: <h1>profile settings error</h1>,
            element: <YetToBe />,
          },
          {
            path: "collection",
            errorElement: <h1>collection error</h1>,
            children: [
              // => Recent
              {
                path: "library",
                errorElement: <h1>library error</h1>,
                element: <YetToBe />,
              },
              // => Recent
              {
                path: "recent",
                errorElement: <h1>recent error</h1>,
                element: <YetToBe />,
              },
              // => favorites
              {
                path: "favorites",
                errorElement: <h1>favorites error</h1>,
                element: <YetToBe />,
              },
              //  => playlists
              {
                path: "playlists",
                errorElement: <h1>playlist error</h1>,
                element: <YetToBe />,
                children: [
                  {
                    path: ":playlistId",
                    errorElement: <h1>playlist error</h1>,
                    element: <YetToBe />,
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
