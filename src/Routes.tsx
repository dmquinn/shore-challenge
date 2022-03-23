import { FC } from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import BasicLayout from "./pages/BasicLayout";
import Contacts from "./pages/Contacts";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export const CONTACTS_ROUTE = "/contacts";

const routeObjects: RouteObject[] = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: CONTACTS_ROUTE, element: <Contacts users={[]} /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const Routes: FC = () => useRoutes(routeObjects);

export default Routes;
