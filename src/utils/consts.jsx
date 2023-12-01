import store from "../store/index.js";

const states = store.getState()

export const mainMenu = [
    {
        path: '/',
        title: 'Home',
        icon: <i className="fa-solid fa-house text-2xl "></i>
    },
    {
        path: '/restaurants',
        title: 'Restaurants',
        icon: <i className="fa-solid fa-bowl-food"></i>
    },
    {
        path : '/orders',
        title: 'Gecmis Siparislerim',
        icon: <i className="fa-solid fa-clock-rotate-left"></i>
    },
    {
        path:  `/profile/${states?.auth?.user?.username}`,
        title: 'Profilim',
        icon: <i className="fa-solid fa-user"></i>
    }
]