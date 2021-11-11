import Vue from 'vue'
import Router from "vue-router";

import login from "@/view/login";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)

const routers = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name:'login',
            component: login
        },
        {
            path: '/HelloWorld',
            component: HelloWorld
        }
    ]
})
export default routers
