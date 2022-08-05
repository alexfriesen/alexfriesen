import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";

import Home from "./pages/home.vue";
import Blog from "./pages/blog.vue";
import Projects from "./pages/projects.vue";
import Contact from "./pages/contact.vue";
import NotFound from "./pages/not-found.vue";

const history = createWebHashHistory();
const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];
const router = createRouter({ history, routes });

export default router;