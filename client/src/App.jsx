import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignIn, SignUp, Profile, About } from "./pages/index";
import { Layout } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/profile", element: <Profile /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
