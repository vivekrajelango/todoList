import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Join from '@/Components/Join.vue';
import Users from '@/Components/Users.vue';
import User from '@/Components/User.vue';
import Board from '@/Components/Board.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home,
    // },
    {
      path: "/",
      name: "join",
      component: Join,
    },
    {
      path:'/users',
      name:"users",
      component: Users
    },
    {
      path:'/user/:id',
      name:"user",
      component: User
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    }
  ],
});

export default router;
