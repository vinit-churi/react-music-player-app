import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@/components/Root";
import HomePage from "@/components/HomePage";
import AlbumPage from "@/components/AlbumPage";
import Search from "@/components/Search";
import YetToBe from "@/components/YetToBe";
import GenrePage from "@/components/GenrePage";
import Protected from "@/components/Protected";
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
        element: <Search />,
      },
      {
        path: "genre/:id/:name",
        errorElement: <h1>genre error</h1>,
        element: <GenrePage />,
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
            element: (
              <Protected>
                <YetToBe />
              </Protected>
            ),
            errorElement: <h1>user/profile error</h1>,
          },
          {
            path: "settings",
            errorElement: <h1>profile settings error</h1>,
            element: (
              <Protected>
                <YetToBe />
              </Protected>
            ),
          },
          {
            path: "collection",
            errorElement: <h1>collection error</h1>,
            children: [
              // => Recent
              {
                path: "library",
                errorElement: <h1>library error</h1>,
                element: (
                  <Protected>
                    <YetToBe />
                  </Protected>
                ),
              },
              // => Recent
              {
                path: "recent",
                errorElement: <h1>recent error</h1>,
                element: (
                  <Protected>
                    <YetToBe />
                  </Protected>
                ),
              },
              // => favorites
              {
                path: "favorites",
                errorElement: <h1>favorites error</h1>,
                element: (
                  <Protected>
                    <YetToBe />
                  </Protected>
                ),
              },
              //  => playlists
              {
                path: "playlists",
                errorElement: <h1>playlist error</h1>,
                element: (
                  <Protected>
                    <YetToBe />
                  </Protected>
                ),
                children: [
                  {
                    path: ":playlistId",
                    errorElement: <h1>playlist error</h1>,
                    element: (
                      <Protected>
                        <YetToBe />
                      </Protected>
                    ),
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
