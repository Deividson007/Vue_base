import { routes as auth } from "../modules/auth";
import { routes as painel } from "../pages/painel";

export default [
    ...auth,
    ...painel
];