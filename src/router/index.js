import { createRouter, createWebHashHistory } from "vue-router";
import ProductosTienda from "@/views/ProductosTienda.vue";
import ProductoTienda from "@/views/ProductoTienda.vue";
import HomeTienda from "@/views/HomeTienda.vue";
import CarritoTienda from "@/views/CarritoTienda.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeTienda",
      component: HomeTienda,
    },
    {
      path: "/productos",
      name: "ProductosTienda",
      component: ProductosTienda,
    },
    {
      path: "/producto/:id",
      name: "ProductoTienda",
      component: ProductoTienda,
    },
    {
      path: "/carrito",
      name: "CarritoTienda",
      component: CarritoTienda,
    },
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

export default router;
