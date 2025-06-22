import { createBrowserRouter } from "react-router";
import { Home } from '../pages/home';
import { BaseTemplate } from '../templates/base/base.template';
import { lazy  } from "react";
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));

// Tạo 
export const router = createBrowserRouter([
  {
    Component: BaseTemplate,
    children: [{
      path: "",
      Component: Home,  
    },
  ],
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
]);
