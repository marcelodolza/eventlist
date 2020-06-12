import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import EventDetails from "../views/EventDetails.vue";
import EventLocation from "../views/EventLocation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/events",
    name: "Events",
    component: Events,
    children: [
      {
        path: "/events/:name/details",
        name: "EventDetails",
        components: {
          default: Events,
          details: EventDetails,
          location: EventLocation
        }
      },
      {
        path: "/events/:name/location",
        name: "EventLocation",
        components: {
          default: Events,
          details: EventDetails,
          location: EventLocation
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
