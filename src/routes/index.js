import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";
import AlbumPage from "../components/AlbumPage";

export default [
  {
    name: "notFound",
    path: "/not-found",
    component: NotFound,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
  {
    name: "login",
    path: "/",
    component: Login,
  },
];

/*
    {
        name: 'register-lifebank',
        path: '/register-lifebank/:code',
        component: RegisterLifebank
    }
    
    */
