import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./components/home.vue";
import Blog from "./components/blog.vue";
import Projects from "./components/projects.vue";
import Contact from "./components/contact.vue";
import NotFound from "./components/not-found.vue";

const history = createWebHashHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];
const router = createRouter({ history, routes });

export default router;