import Dashboard from "./Dashboard";
import Login from "./Login";
import NotFound from "./NotFound";

export default [
  {
    name: "notFound",
    path: "/not-found",
    component: NotFound,
  },
  {
    name: "login",
    path: "/",
    component: Login,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
  },
];
/*
        name: 'info',
        path: '/info/:url',
        component: InfoPage
    },
    {
        name: 'register-lifebank',
        path: '/register-lifebank/:code',
        component: RegisterLifebank
    }
    
    */
