import { Navigate, useRoutes } from 'react-router-dom'
import Home from '../pages/home'
import Blog from '../pages/blog'
import V3Admin from '../pages/V3admin'
import Methods from '../pages/methods'
export const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    meta: {
      requiresAuth: false,
      title: "首页",
      key: "home"
    }
  },
  {
    path: "/Blog",
    element: <Blog />,
    meta: {
      requiresAuth: false,
      title: "博客",
      key: "blog"
    }
  },
  {
    path: "/V3Admin",
    element: <V3Admin />,
    meta: {
      requiresAuth: false,
      title: "V3Admin",
      key: "V3Admin"
    }
  },
  {
    path: "/Methods",
    element: <Methods />,
    meta: {
      requiresAuth: false,
      title: "Methods",
      key: "Methods"
    }
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter as any);
  return routes;
};

export default Router;
