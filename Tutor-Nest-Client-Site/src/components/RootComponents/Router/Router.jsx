import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../../PageComponents/Home/Home";
import Services from "../../PageComponents/Services/Services";
import Login from "../../PageComponents/Auth/Login";
import AddServices from "../../PageComponents/Deshboard/AddServices/AddServices";
import Private from "../PrivateRoute/Private";
import MenageServices from "../../PageComponents/Deshboard/MenageServices/MenageServices";
import BoockedServices from "../../PageComponents/Deshboard/BoockedServices/BoockedServices";
import ServiceToDo from "../../PageComponents/Deshboard/ServiceToDo/ServiceToDo";
import Details from "../../PageComponents/Services/Details";
import UpdateService from "../../PageComponents/Deshboard/MenageServices/UpdateService";
import About from "../../PageComponents/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/serviceCount`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addServices",
        element: (
          <Private>
            <AddServices></AddServices>
          </Private>
        ),
      },
      {
        path: "/menageServices/:email",
        element: (
          <Private>
            <MenageServices></MenageServices>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/service/${params.email}`, {
            credentials: "include",
          }),
      },
      {
        path: "/bookedServices/:email",
        element: (
          <Private>
            <BoockedServices></BoockedServices>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/boock/${params.email}`),
      },
      {
        path: "/serviceToDo/:email",
        element: (
          <Private>
            <ServiceToDo></ServiceToDo>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/bock/${params.email}`),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <Private>
            <UpdateService></UpdateService>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/services/${params.id}`),
      },
    ],
  },
]);

export default router;
