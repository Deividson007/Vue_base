export default [
    {
        path: "/painel",
        name: "painel",
        component: () => import(/* webpackChunkName: "home" */ "./Painel")
    }
];