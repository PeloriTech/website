import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Talos from "./views/Talos.vue";
import FlyRight from "./views/FlyRight.vue"
import Contact from "./views/Contact.vue"
import Team from "./views/Team.vue"
import Career from "./views/Career.vue"
import Goren from "./views/Goren.vue"
import Osiris from "./views/Osiris.vue"
import Developer from "./views/Developer.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing
    },
    {
      path: "/team",
      name: "Team",
      component: Team
    },
    {
      path: "/developer",
      name: "Developer",
      component: Developer
    },
    {
      path: "/product/talos",
      name: "talos",
      component: Talos
    },
    {
      path: "/product/osiris",
      name: "osiris",
      component: Osiris
    },
    // {
    //   path: "/product/goren",
    //   name: "goren",
    //   component: Goren
    // },
    // {
    //   path: "/product/flyright",
    //   name: "flyright",
    //   component: FlyRight
    // },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/career",
      name: "career",
      component: Career
    }
  ]
});
