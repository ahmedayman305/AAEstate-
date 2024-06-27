import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignIn, SignUp, Profile, About } from "./pages/index";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-out", element: <SignUp /> },
  { path: "/profile", element: <Profile /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
