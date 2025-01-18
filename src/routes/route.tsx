import RootLayout from "@/layouts/RootLayout";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router-dom"
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Tasks/>
      },
      {
        path: "/users",
        element: <Users/>
      },
    ]
  }
])

export default route;