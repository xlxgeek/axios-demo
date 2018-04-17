import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = (resolve) => {
    import('../components/home/Home').then((module) => {
        resolve(module)
    })
}
const Login = (resolve) => {
    import('../components/login/Login').then((module) => {
        resolve(module)
    })
}



export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/home",
            component: Home
        }
    ]
})